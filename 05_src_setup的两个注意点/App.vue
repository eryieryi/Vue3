<template>
  <Demo msg="你好" school="东华" @hello="sayHello">
    <template v-slot:aaa>
      <span>你好</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup() {
      function sayHello(value){
        console.log('我是hello事件，我收到的值为：',value)
      }
      return {
        sayHello
      }
    }
  }
</script>
