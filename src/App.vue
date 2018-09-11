<template>
  <div id="app">
    <div class="container">
      <h1>Example</h1>
      <section data-title="jsonEditor">
        <code>JsonEditor is base on  <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a> , lint base on json-lint </code>
        <div class="editor-container">
          <json-editor ref="jsonEditor" v-model="value"/>
        </div>
      </section>
      <section data-title="日历">
        <Calendar></Calendar>
      </section>
     <!--  轮播-->
      <section data-title="轮播图">
        <Slider :imgArr="imgs"/>
      </section>
      <!-- 图片查看器-->
      <section data-title="照片查看">
        <ViewImages :imageList="photos" :title="title"/>
      </section>
      <!-- 菜单栏-->
      <section data-title="菜单栏">
        <MyWorkbench :meunData="meunData"/>
      </section>
      <!-- lodding-->
      <section data-title="lodding">
        <Lodding :loddingText="loddingText" :background="background" :className="className" :opacityDeep="opacityDeep" :color="color"/>
      </section>
      <!-- 左右联动-->
      <section data-title="左右联动">
        <Listview/>
      </section>
      <!-- 下拉刷新-->
      <section data-title="下拉刷新">
        <PullRefresh :next="refresh">
          <div slot="list">
            <section v-for="item of list" class="list-item">
              {{item.title}}
            </section>
          </div>
        </PullRefresh>
      </section>
    </div>
  </div>
</template>

<script>
  import Calendar from './pc/Calendar.vue'
  import JsonEditor from './pc/JsonEditor.vue'
  import Slider from './phone/Slider.vue'
  import ViewImages from './common/viewImages.vue'
  import Lodding from './common/lodding.vue'
  import MyWorkbench from './pc/myWorkbench/MyWorkbench.vue'
  import Listview from './phone/Listview.vue'
  import PullRefresh from './phone/pullRefresh.vue'

  const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'
  export default {
    name: 'app',
    data() {
      return {
        value: JSON.parse(jsonData),
        // 轮播数据
        imgs:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg'
        ],
        // 照片查看器
        photos:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg'
        ],
        title:'采购合同',
        // 菜单栏
        meunData: [{
          imgUrl: "https://pic.51zhangdan.com/u51/storage/project_4771/175615c5-bcd7-a52e-a516-717395038bb6.png",
          name: "账单管理",
          number: 110,
          url: "http://www.baidu.com"
        },{
          imgUrl: "https://pic.51zhangdan.com/u51/storage/project_4771/10d8d74c-92f6-f88c-94a8-9d4e7be79a04.png",
          name: "金融服务",
          number: 120,
          url: "http://www.baidu.com"
        }],
        // lodding
        loddingText:'加载中...',
        background:'black',
        opacityDeep:0.6,
        color:'blue',
        className: 'lodding1',
        // 左右联动
        singers:[{
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
          }],
        // 下拉刷新
        list: [
          { title: '什么是伪类？作为JavaScript程序员的你知道吗?' },
          { title: 'JavaScript实现简单的双向数据绑定（Ember、Angular、Vue）' },
          { title: 'WebView性能、体验分析与优化' },
          { title: '模块化JavaScript组件开发指南' },
          { title: '前端高手教你高效管理数据：将JSON API和Redux结合使用' },
          { title: '前端每周清单第 17 期：大前端技术生命周期模型；WWDC 发布 Safari 11；面向生产环境的前端性能优化' },
          { title: '前端不为人知的一面——前端冷知识集锦' },
          { title: 'Web前端开发工程师需要掌握哪些核心技能？' },
          { title: '探讨后端选型中不同语言及对应的Web框架' },
          { title: '有一本书，适合零到十年经验的程序员看' },
          { title: 'JavaScript 的装饰器：它们是什么及如何使用' },
          { title: '移动端一个像素问题解决方案' }
        ],
        backup: [
          { title: 'Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果' },
          { title: '混合是一种灵活的分布式复用 Vue 组件的方式。混合对象可以包含任意组件选项' },
          { title: '由于多个状态分散的跨越在许多组件和交互间各个角落，大型应用复杂度也经常逐渐增长。为了解决这个问题，Vue 提供 vuex' },
          { title: 'Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器。' },
          { title: '除了默认设置的核心指令( v-model 和 v-show ),Vue 也允许注册自定义指令。' },
          { title: '混合是一种灵活的分布式复用 Vue 组件的方式。混合对象可以包含任意组件选项。' },
          { title: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据' },
          { title: '模板内的表达式是非常便利的，但是它们实际上只用于简单的运算。在模板中放入太多的逻辑会让模板过重且难以维护' },
          { title: '许多事件处理的逻辑都很复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的' },
          { title: 'Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新' }
        ]
      }
    },
    methods: {
      refresh() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const appendList = []
            const temp = {}
            while (appendList.length < 3) {
              const index = Math.floor(Math.random() * 10)
              if (!temp[`attr${index}`]) {
                temp[`attr${index}`] = this.backup[index]
                appendList.push(this.backup[index])
              }
            }
            for (let i = 0; i < appendList.length; i++) {
              this.list.unshift(appendList[i])
            }
            resolve()
          }, 2000)
        })
      }
    },
    components: {
      JsonEditor,
      Calendar,
      Slider,
      ViewImages,
      MyWorkbench,
      Lodding,
      Listview,
      PullRefresh
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
  }

  .container h1 {
    font-size: 50px;
    text-align: center;
    padding-top: 50px;
    color: #2980b9;
  }

  section {
    padding: 70px 20px 20px 20px;
    margin: 50px auto;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .36);
    width: 80%;
    background-color: #fff;
    position: relative;
  }

  section::after {
    content: attr(data-title);
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #f05b72;
  }

  .editor-container{
    position: relative;
    height: 100%;
  }
</style>
