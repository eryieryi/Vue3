<template>
  <div class="app">
    <h1>App组件</h1>
    <Suspense>
      <template v-slot:default>
        <Demo></Demo>
      </template>
      <template v-slot:fallback>
        <div>
          <h2>加载中...</h2>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
  import {defineAsyncComponent} from 'vue'
  const Demo = defineAsyncComponent(()=>import('./components/Demo.vue')) // 动态引入
  export default {
    name: 'App',
    components:{Demo}
  }
</script>

<style lang="css">
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>