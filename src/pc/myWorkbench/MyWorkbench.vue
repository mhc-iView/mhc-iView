<template>
  <div>
    <ModuleItem :meunData="meunData"/>
  </div>
</template>

<script>
import ModuleItem from './ModuleItem'
export default {
  name: 'MyWorkbench',
  components: {
    ModuleItem
  },
  props: {
    meunData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      meunData: {
//        applyDomain: [],
//        orderDomain: [],
//        asetsDomain: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
