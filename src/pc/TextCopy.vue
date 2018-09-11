<template>
  <div class="TextCopy">
    <Icon v-if="!copied" type="md-copy" ref='sendinfo' @click="copy" color="#000" :size="this.size" />
    <Icon v-if="copied" type="md-checkmark" color="#42b983" :size="this.size" />
  </div>
</template>

<script>
export default {
  name: 'TextCopy',
  data() {
    return {
      text: '',
      copied: false
    }
  },
  props: {
    copyContent: {
      type: String
    },
    size: {
      type: Number,
      default: 24
    }
  },
  methods: {
    copy() {
      const faker = document.createElement('textarea')
      faker.style.visibility = 'none'
      faker.style.position = 'fixed'
      faker.style.top = 0
      faker.style.left = 0
      faker.style.zIndex = -9999
      faker.setAttribute('readonly', '') // 防止移动端弹出输入法
      faker.value = this.copyContent

      document.body.appendChild(faker)

      faker.focus()
      faker.setSelectionRange(0, this.copyContent.length)

      try {
        document.execCommand('copy')
        this.copied = true
        setTimeout(() => { 
          this.copied = false
        }, 500)
      } catch (err) {
        alert('Oops, 看起来您的浏览器不支持自动拷贝, 请选中以上文字复制吧')
      } finally {
        document.body.removeChild(faker)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.TextCopy {
  display: inline;
}
</style>

