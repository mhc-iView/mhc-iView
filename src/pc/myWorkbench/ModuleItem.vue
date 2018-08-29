<template>
  <div>
    <el-card  class="box-card">
      <el-row>
        <el-col class="module-content" v-for="(item, index) in meunData" :key="index">
          <el-row
                  type="flex"
                  justify="center"
                  align="middle"
                  class="el-row-height">
            <el-col :span="4" ><img :src="item.imgUrl" alt=""></el-col>
            <el-col :span="6">
              <el-row><span class="text">{{ item.name}}</span></el-row>
              <el-row><span class="number"><a  :href="item.url">{{ item.number}}</a></span></el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ModuleItem',
  components: {},
  props: {
    meunData: {
      type: Array,
      default: function () {
        return []
      }
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    margin-bottom: 15px;
  }
  .module-title {
    font-size: 18px;
    font-weight: bold;
    color: #3D3D3D;
  }
  .module-content {
    margin-top: 20px;
    margin-right: 10px;
    width: 350px;
    height: 120px;
    font-size: 18px;
    background: #EBEBEB;
    border-radius: 8px;
    .el-row-height {
      height: 120px;
      .text {
        font-size: 12px;
      }
      .number a{
        color: black;
        font-weight: 400;
        margin-top: 10px;
        text-decoration: none;
        color: red;
      }
    }
  }
</style>
