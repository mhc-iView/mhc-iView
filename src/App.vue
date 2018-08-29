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
      <section data-title="轮播图">
        <Slider :imgArr="imgs"/>
      </section>
      <section data-title="倒计时">
        <CountDown :endTime="endTime"></CountDown>
      </section>
      <section data-title="省市区联动">
        <span style="margin-left:40%;">地址：{{ `${privance} ${city} ${area}` }}</span><br/>
        <CityLinkage @changeSelected="getChange"></CityLinkage>
      </section>
    </div>
  </div>
</template>

<script>
  import Calendar from './pc/Calendar.vue'
  import JsonEditor from './pc/JsonEditor.vue'
  import Exception from './pc/Exception.vue'
  import Slider from './phone/Slider.vue'
  import CityLinkage from './pc/CityLinkage'
  import CountDown from './pc/CountDown.vue'

  const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'
  export default {
    name: 'app',
    data() {
      return {
        value: JSON.parse(jsonData),
        imgs:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg'
        ],
        privance: '',
        city: '',
        area: '',
        endTime: '2018-09-30'
      }
    },
    components: {
      JsonEditor,
      Calendar,
      Exception,
      Slider,
      CityLinkage,
      CountDown
    },
    methods: {
      getChange (pri, city, area) {
        this.privance = pri
        this.city = city
        this.area = area
      }
    }
  }
</script>

<style lang="scss">
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
