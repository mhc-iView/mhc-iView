<template>
  <div id="app">
    <div class="container">
      <h1>Example</h1>
      <section data-title="分页">
        <Pagination :pageNo="1" :totalPage="100" :totalCount="2000"></Pagination>
      </section>
      <section data-title="日历">
        <Calendar></Calendar>
      </section>
      <section data-title="轮播图">
        <Slider :imgArr="imgs"/>
      </section>
    </div>
  </div>
</template>

<script>
  import Pagination from './pc/Pagination.vue'
  import Calendar from './pc/Calendar.vue'
  import Slider from './phone/Slider.vue'
  export default {
    name: 'app',
    data() {
      return {
        message: 'test',
        imgs:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg'
        ]
      }
    },
    components: {
      Pagination,
      Calendar,
      Slider
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

</style>
