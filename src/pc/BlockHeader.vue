<template>
  <div class="BlockHeader">
    <h1 v-if="size===1">{{blockTitle}}</h1>
    <h2 v-if="size===2">{{blockTitle}}</h2>
    <h3 v-if="size===3">{{blockTitle}}</h3>
    <h4 v-if="size===4">{{blockTitle}}</h4>
    <h5 v-if="size===5">{{blockTitle}}</h5>
    <h6 v-if="size===6">{{blockTitle}}</h6>
  </div>
</template>

<script>
export default {
  name: 'BlockHeader',
  props: {
    blockTitle: {
      type: String,
      default: '标题1'
    },
    size: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
.BlockHeader {
  color: #373737;
  margin: 20px 0;
  :before {
    content: '';
    display: inline-block;
    height: 1em;
    width: 2px;
    background-color: #2d8cf0;
    margin-right: 18px;
    box-sizing: border-box;
  }
}
</style>
