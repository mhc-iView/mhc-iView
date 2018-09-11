<template>
  <div class="cd_container">
    <div class="cd_time" v-if="!this.msg">
      <label v-if="this.day">{{ day }}</label>
      <label v-if="this.day">天</label>
      <label>{{ hr }}</label>
      <label style="width: 20px;">:</label>
      <label>{{ min }}</label>
      <label style="width: 20px;">:</label>
      <label>{{ sec }}</label>
    </div>
    <div class="cd_msg" v-else-if="this.msg">
      <label>{{ msg }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  data () {
    return {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      msg: ''
    }
  },
  props: {
    endTime: {
      type: String,
      default: new Date()
    },
    endFun: {
      type: Function
    }
  },
  mounted () {
    this.countdown()
  },
  methods: {
    countdown () {
      const time = this.endTime.split(" ")
      const end = Date.parse(new Date(time[1] ? this.endTime : this.endTime + ' 00:00:00'))
      const now = Date.parse(new Date())
      const msec = end - now
      if (msec >= 0) {
        let day = parseInt(msec / 1000 / 60 / 60 / 24)
        let hr = parseInt(msec / 1000 / 60 / 60 % 24)
        let min = parseInt(msec / 1000 / 60 % 60)
        let sec = parseInt(msec / 1000 % 60)
        this.day = day
        this.hr = hr > 9 ? hr : '0' + hr
        this.min = min > 9 ? min : '0' + min
        this.sec = sec > 9 ? sec : '0' + sec
        const that = this
        setTimeout(function () {
          that.countdown()
        }, 1000)
      } else {
        this.msg = '倒计时结束'
        this.endFun ? this.endFun() : null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cd_container {
  font-size: 16px;
  .cd_time, .cd_msg {
    text-align: center;
  }
}
</style>
