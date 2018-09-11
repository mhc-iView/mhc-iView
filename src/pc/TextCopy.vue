<template>
  <div class="TextCopy">
    <Tooltip v-if="!copied" content="复制文本" placement="top">
      <Icon v-if="!copied" type="md-copy" ref='sendinfo' @click="copy" :color="this.color" :size="this.size" />
    </Tooltip>
    <Tooltip v-if="copied" content="复制成功" placement="top">
      <Icon v-if="copied" type="md-checkmark" color="#42b983" :size="this.size" />
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: 'TextCopy',
  data() {
    return {
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
    },
    color: {
      type: String,
      default: '#000'
    },
    copiedFun: {
      type: Function
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
          this.copiedFun()
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
  cursor: pointer;
}
</style>

