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
      <section data-title="异常页">
        <Exception></Exception>
      </section>
      <section data-title="图片瀑布流">
        <picture-waterfall :data="waterfallImages"></picture-waterfall>
      </section>
      <section data-title="轮播图">
        <Slider :imgArr="imgs"/>
      </section>
      <!-- 图片查看器-->
      <section data-title="照片查看">
        <ViewImages :imageList="photos" :title="title"/>
      </section>
      <section data-title="倒计时">
        <CountDown :endTime="endTime"></CountDown>
      </section>
      <section data-title="省市区联动">
        <span style="margin-left:40%;">地址：{{ `${privance} ${city} ${area}` }}</span><br/>
        <CityLinkage @changeSelected="getChange"></CityLinkage>
      </section>
      <!-- 菜单栏-->
      <section data-title="菜单栏">
        <MyWorkbench :meunData="meunData"/>
      </section>
      <!-- lodding-->
      <section data-title="加载动画">
        <Lodding :loddingText="loddingText" :background="background" :className="className" :opacityDeep="opacityDeep" :color="color"/>
      </section>
      <section data-title="饼状图">
        <Echarts :chartData="chartData" :title="chartTitle" @clickItem="clickItem" @addNewItem="addNewItem"></Echarts>
      </section>
      <section data-title="模块标题">
        <BlockHeader :blockTitle="'申请信息'" :size="2" />
      </section>
      <section data-title="多行文本裁剪" style="height:200px">
        <ClampLines :width="'400px'" :lines="3" />
      </section>
    </div>
  </div>
</template>

<script>
  import Calendar from './pc/Calendar.vue'
  import JsonEditor from './pc/JsonEditor.vue'
  import Exception from './pc/Exception.vue'
  import PictureWaterfall from './pc/PictureWaterfall.vue'
  import Slider from './phone/Slider.vue'
  import CityLinkage from './pc/CityLinkage'
  import CountDown from './pc/CountDown.vue'
  import ViewImages from './common/viewImages.vue'
  import Lodding from './common/lodding.vue'
  import MyWorkbench from './pc/myWorkbench/MyWorkbench.vue'
  import Echarts from './pc/Echarts.vue'
  import BlockHeader from './pc/BlockHeader.vue'
  import ClampLines from './pc/ClampLines.vue'

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
        // 省市区联动
        privance: '',
        city: '',
        area: '',
        // 倒计时
        endTime: '2018-09-30',
        waterfallImages: 
        ['http://img0.imgtn.bdimg.com/it/u=2502313064,1397167486&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=820187427,4212180164&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3561759131,2732048751&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=428549871,4004515111&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2339694865,2382456002&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1706662613,4153832992&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1134559476,164772601&fm=200&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=54202095,3670836593&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2022888886,2757317261&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2818660063,53944668&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1598903339,3545123556&fm=200&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3756090549,2773217785&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1841827901,1655131218&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=1254316055,1307220925&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=820187427,4212180164&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3561759131,2732048751&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=428549871,4004515111&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2339694865,2382456002&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1706662613,4153832992&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1134559476,164772601&fm=200&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=54202095,3670836593&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2022888886,2757317261&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2818660063,53944668&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1598903339,3545123556&fm=200&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3756090549,2773217785&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1841827901,1655131218&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=1254316055,1307220925&fm=200&gp=0.jpg',
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
        // 饼形图
        chartTitle: '水果数量分布图',
        chartData: {
          columns: ['水果', '数量'],
          rows: [
            { '水果': '猕猴桃', '数量': 1393},
            { '水果': '香蕉', '数量': 3530 },
            { '水果': '梨', '数量': 2923 },
            { '水果': '桃子', '数量': 1723 },
            { '水果': '葡萄', '数量': 3792 },
            { '水果': '芒果', '数量': 4593 }
          ]
        }
      }
    },
    components: {
      JsonEditor,
      Calendar,
      Exception,
      PictureWaterfall,
      Slider,
      CityLinkage,
      ViewImages,
      MyWorkbench,
      Lodding,
      CountDown,
      Echarts,
      BlockHeader,
      ClampLines
    },
    methods: {
      getChange (pri, city, area) {
        this.privance = pri
        this.city = city
        this.area = area
      },
      // 点击饼状图某一项之后想进行的操作
      clickItem(e) {
        console.log(e)
      },
      // 饼状图添加新项
      addNewItem(obj) {
        const len = this.chartData.rows.length
          this.chartData.rows.push(obj)
          this.$Message.success('添加成功')
      }
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
    padding: 70px 20px 20px 20px!important;
    margin: 50px auto!important;
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

