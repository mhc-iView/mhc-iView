<template>
<div class="box">
  <Poptip trigger="hover" :content="textContent" word-wrap :width="this.width.replace(/[^\d]/g, '')" :placement="placement">
    <div class="ClampLines" :style="{width: this.width,'-webkit-line-clamp':this.lines}">
      {{textContent}}
    </div>
  </Poptip>
</div>
</template>

<script>
export default {
  name: 'ClampLines',
  props: {
    textContent: {
      type: String,
      default: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
    },
    width: {
      type: String
    },
    lines: {
      type: Number,
      default: 2
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
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
}
</style>
