<template>
    <div class="wrap">
        <scroll @scroll="scroll"
                :listen-scroll="listenScroll"
                :probe-type="probeType"
                :data="data"
                class="listview"
                ref="listview">
            <ul>
                <li v-for="group in data" class="list-group" ref="listGroup">
                    <h2 class="list-group-title">{{group.title}}</h2>
                    <uL>
                        <li v-for="item in group.items" class="list-group-item">
                            <img class="avatar" :src="item.avatar">
                            <span class="name">{{item.name}}</span>
                        </li>
                    </uL>
                </li>
            </ul>
            <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart"
                 @touchmove.stop.prevent="onShortcutTouchMove">
                <ul>
                    <li v-for="(item, index) in shortcutList"
                        :data-index="index" class="item"
                        :class="{'current':currentIndex==index}">
                        {{item}}
                    </li>
                </ul>
            </div>
        </scroll>
    </div>
</template>

<script>
  import scroll from './scroll.vue'

  const TITLE_HEIGHT = 33
  const ANCHOR_HEIGHT = 18

  export default {
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1,
        data: [{
          "title": "A",
          "items": [{
            "id": "0020PeOh4ZaCw1",
            "name": "Alan Walker (艾伦·沃克)",
            "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M0000020PeOh4ZaCw1.jpg?max_age=2592000"
          }, {
            "id": "003ArN8Z0WpjTz",
            "name": "A-Lin",
            "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000"
          }, {
            "id": "003CoxJh1zFPpx",
            "name": "Adele (阿黛尔)",
            "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000"
          }]
        },
          {
            "title": "B",
            "items": [{
              "id": "004AlfUb0cVkN1",
              "name": "BIGBANG (빅뱅)",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000"
            }, {
              "id": "002pUZT93gF4Cu",
              "name": "BEYOND",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000002pUZT93gF4Cu.jpg?max_age=2592000"
            }, {
              "id": "003LaMHm42u7qS",
              "name": "本兮",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003LaMHm42u7qS.jpg?max_age=2592000"
            }, {
              "id": "003DBAjk2MMfhR",
              "name": "BLACKPINK",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000"
            }]
          }, {
            "title": "C",
            "items": [{
              "id": "003Nz2So3XXYek",
              "name": "陈奕迅",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg?max_age=2592000"
            }, {
              "id": "004DFS271osAwp",
              "name": "陈小春",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000"
            }, {
              "id": "000jnR7q3pCzYG",
              "name": "Charlie Puth (查理·普斯)",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000jnR7q3pCzYG.jpg?max_age=2592000"
            }, {
              "id": "004EyqQS2hMS6V",
              "name": "陈翔",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000"
            }, {
              "id": "000hNnWC3kko2c",
              "name": "蔡健雅",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000"
            }]
          },
          {
            "title": "Z",
            "items": [{
              "id": "003Nz2So3XXYek",
              "name": "周杰伦",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg?max_age=2592000"
            }, {
              "id": "004DFS271osAwp",
              "name": "周迅",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000"
            }, {
              "id": "000jnR7q3pCzYG",
              "name": "周传雄",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000jnR7q3pCzYG.jpg?max_age=2592000"
            }, {
              "id": "004EyqQS2hMS6V",
              "name": "周杰",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000"
            }, {
              "id": "000hNnWC3kko2c",
              "name": "周华健",
              "avatar": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000"
            }]
          }]

      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
      setTimeout(() => {
        this._calculateHeight() //  计算每一个listGroup的高度
      }, 20)
    },
//    props: {
//      data: {
//        type: Array,
//        default: []
//      }
//    },
    computed: {
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      },
//      fixedTitle () {
//        // 固定title实现
//        if (this.scrollY > 0) {
//          return ''
//        }
//        return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
//      }
    },
    methods: {
      getData(el, name, val) {
        const prefix = 'data-'
        if (val) {
          return el.setAttribute(prefix + name, val)
        }
        return el.getAttribute(prefix + name)
      },
      onShortcutTouchStart(e) {
        // 获取点击元素的索引
        let anchorIndex = this.getData(e.target, 'index')
        console.log(anchorIndex)
        let firstTouch = e.touches[0]
        console.log(firstTouch)
        // 获取手指的位置
        this.touch.y1 = firstTouch.pageY
        // 手指触摸开始的索引
        this.touch.anchorIndex = anchorIndex
        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        // y轴偏移量
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollTo(anchorIndex)
      },
      _scrollTo(index) {
        // 边界处理
        console.log('---------' + this.listHeight)
        if (!index && index !== 0) {
          return
        }
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[index]
        // 根据索引对应滚动到相应的位置，实现左右联动效果
        this.currentIndex = index
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0) // 表示动画时间
      },
      scroll(pos) {
        this.scrollY = pos.y // 获取scroll滚动y轴距离
      },
      _calculateHeight() {
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }

    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight() //  计算每一个listGroup的高度
        }, 20)
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // 当滚动到顶部，newY>0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
          console.log("-newY " + -newY)
          let height1 = listHeight[i]
          console.log("height1" + height1)
          let height2 = listHeight[i + 1]
          console.log("height2" + height2)
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            //this.diff = height2 + newY
            console.log("--currentIndex" + this.currentIndex)
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
      },
//        diff (newVal) {
//          let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
//          if (this.fixedTop === fixedTop) {
//            return
//          }
//          this.fixedTop = fixedTop
//          this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
//        }

    },
    components: {
      scroll
    }
  }

</script>

<style scoped lang="scss">
    .listview {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #222;
        ul{
           list-style-type: none;
            padding: 5px;
        }
        .list-group {
            padding-bottom: 30px;
            .list-group-title {
                height: 30px;
                line-height: 30px;
                //padding-left: 20px;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.5);
                background: #333;
            }
            .list-group-item {
                display: flex;
                align-items: center;
                padding: 20px 0 0 30px;
                .avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                .name {
                    margin-left: 20px;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 12px;
                }
            }
        }
        .list-shortcut {
            position: absolute;
            z-index: 30;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            padding: 20px 0;
            border-radius: 10px;
            text-align: center;
            background: #222;
            font-family: Helvetica;
            .item {
                padding: 3px;
                line-height: 1;
                color: rgba(255, 255, 255, 0.5);
                font-size: 12px;
                &.current {
                    color: yellow;
                }
            }
        }
    }
    .wrap{
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>
