<template>
  <div class="Echarts">
    <span class="title">{{ title }}</span>
    <ve-pie :data="chartData"
      :color="colorList"
      :data-empty="dataEmpty"
      :events="chartEvents"
      :settings="chartSettings"
    ></ve-pie>
    <div class="add" v-if="this.addNew">
      {{chartData.columns[0]}}：
      <Input v-model="name" placeholder="请输入名称" style="width: 15%" />
      {{chartData.columns[1]}}：
      <Input v-model="proportion" placeholder="请输入数量" style="width: 15%" />
      <!-- 颜色：
      <Input v-model="color" placeholder="请输入颜色" style="width: 15%" /> -->
      &nbsp;&nbsp;
      <Button type="primary" @click="addNewItem">添加</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        selectedMode: 'single',
        hoverAnimation: false
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          self.clickItem(e)
        }
      }
      return {
        name: '',
        proportion: ''
        // color: ''
      }
    },
    props: {
      colorList: {
        type: Array,
        default() {
          return ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83']
        }
      },
      chartData: {
        type: Object,
        default: {}
      },
      dataEmpty: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      addNew: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      clickItem(e) {
        this.$emit('clickItem', e)
      },
      addNewItem() {
        var $name = this.chartData.columns[0]
        var $proportion =this.chartData.columns[1]
        var $list = this.chartData.rows
        var isHave = 0;
        for(let i in $list) {
          if($list[i].hasOwnProperty($name) && $list[i][$name] === this.name) {
            isHave = i;
            break;
          }
        }
        if(isHave != 0) {
          alert("名称不能重复")
        } else {
          var $obj = {}
          $obj[$name] = this.name
          $obj[$proportion] = this.proportion
          this.$emit('addNewItem', $obj)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.title {
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
}
.add {
  text-align: center;
}
</style>
