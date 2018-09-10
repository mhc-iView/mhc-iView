<template>
<Poptip trigger="hover" :content="textContent" word-wrap width="400">
  <div class="ClampLines" :style="{width: this.width,'-webkit-line-clamp':this.lines}">
    {{textContent}}
  </div>
</Poptip>
</template>

<script>
export default {
  name: 'ClampLines',
  props: {
    textContent: {
      type: String,
      default: 'Zent ( \ˈzent\ ) 是有赞 PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件。目前我们有 50+ 组件，这些组件都已经在有赞的各类 PC 业务中使用，我们会在此基础上，持续开发一些新组件。我们的目标是让 React 项目开发更快、更简单。'
    },
    width: {
      type: Number
    },
    lines: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.ClampLines {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  :after {
    content: '...'
  }
}
</style>
