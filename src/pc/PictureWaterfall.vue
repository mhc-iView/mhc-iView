<template>
  <div id="waterfall" ref="wrapper">
    <ul class="group" :style="{'margin-right': index + 1 < groupLength ? '10px' : ''}" v-for="(group, index) in groupData">
      <li class="group-item" v-for="img in group"><img :src="img"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PicterWaterfall',
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    computed: {
      groupLength: function () {
        return Math.floor(this.containerWidth / 310);
      },
      groupMargin: function () {
        return Math.floor((this.containerWidth % 310) / (this.groupLength - 1));
      }
    },
    data() {
      return {
        groupData: [],
        containerWidth: NaN,
        isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i), // 初始化移动端
      }
    },
    mounted() {
      this.containerWidth = document.querySelector('#waterfall').offsetWidth;
      this.splitGroup();

      window.addEventListener('resize', () => {
        this.containerWidth = document.querySelector('#waterfall').offsetWidth;
        this.splitGroup();
      })
     },
    methods: {
      splitGroup: function () {
        const emptyArray = [];
        this.data.map((item, index) => {
          for(let i = 0; i < this.groupLength; i++) {
            if (typeof emptyArray[i] === 'object') {
              if (index % this.groupLength === i) {
                emptyArray[i].push(item);
              }
            } else {
              emptyArray[i] = [];
              if (index % this.groupLength === i) {
                emptyArray[i].push(item);
              }
            }
          }
        })
        this.groupData = emptyArray;
      }
    }
  }
</script>

<style lang="scss" scoped>
#waterfall {
  overflow: hidden;
  display: flex;

  .group {
    flex: 1;
    list-style: none;

    &-item {
      padding: 5px 0;
      overflow: hidden;
      transition: all 0.2s linear;
      -webkit-transition: all 0.2s linear;
    }

    &-item:hover {
      transform: translate(-2px, -2px);
    }

    img {
      width: 100%;
      cursor: pointer;
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }
  }
}
</style>