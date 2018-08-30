<template>
  <div class="Echarts">
    <span class="title">{{ title }}</span>
    <ve-pie :data="chartData"
      :color="colorList"
      :data-empty="dataEmpty"
      :events="chartEvents"
      :settings="chartSettings"
    ></ve-pie>
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
      return {}
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
      }
    },
    methods: {
      clickItem(e) {
        this.$emit('clickItem', e)
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
</style>
