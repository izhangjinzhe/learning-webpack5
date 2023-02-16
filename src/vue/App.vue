<template>
  <div>
    <button @click="click">点击</button>
    hello vue
    {{count}}
  </div>
</template>
<script setup>
import { ref } from "vue";

const count = ref(0)

const click = ()=>{
  count.value += 1
}
</script>

<style lang="less" scoped>
div{
  font-size: 20px;
  &{
    background: antiquewhite;
  }
}
</style>
