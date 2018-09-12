<template>
  <div class="TextCopy">
    <Tooltip v-if="!copied" content="复制文本" placement="top">
      <Icon v-if="!copied" type="md-copy" ref='sendinfo' @click="copy" :color="this.color" :size="this.size" />
    </Tooltip>
    <Tooltip v-if="copied" content="复制成功" placement="top">
      <Icon v-if="copied" type="md-checkmark" color="#42b983" :size="this.size" />
    </Tooltip>
    <textarea class="textarea" ref="textarea" cols="3" rows="2" readonly=""></textarea>
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
      const faker = this.$refs.textarea
      faker.value = this.copyContent
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
        // document.body.removeChild(faker)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.TextCopy {
  display: inline;
  cursor: pointer;
  .textarea {
    visibility: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -9999;
  }
}
</style>

