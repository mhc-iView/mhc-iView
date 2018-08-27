<template>
  <div>
    <el-row>
      <el-col :span="24"><h4 class="title-text">{{ title + '：' }}</h4></el-col>
      <el-col
        v-for="(o, index) in imageList"
        :span="4"
        :key="index">
        <el-card :body-style="{ padding: '1px' }">
          <img
            :alt="index"
            :src="o+'?imageView2/2/w/100/h/100'"
            :data-original="o"
            class="image"
            @click="initViewer()">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.min.css'
export default {
  name: 'ViewImages',
  props: {
    title: {
      type: String,
      default: ''
    },
    imageList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      viewerId: null
    }
  },
  created () {
  },
  methods: {
    initViewer () {
      console.log(this.$el)
      // var galley = document.getElementsByClassName('galley')[0]
      this.viewerId = new Viewer(this.$el, {
        url: 'data-original',
        toolbar: {
          zoomIn: 4,
          zoomOut: 4,
          oneToOne: 4,
          reset: 4,
          prev: 4,
          play: {
            show: 0,
            size: 'large'
          },
          next: 4,
          rotateLeft: 4,
          rotateRight: 4,
          flipHorizontal: 0,
          flipVertical: 0
        }
      })
      console.log(this.viewerId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .image {
    width: 30%;
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
  }
  .title-text{
    font-weight: 400;
  }
</style>
