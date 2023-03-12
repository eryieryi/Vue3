<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">hello</button>
</template>

<script>
  export default {
    name: 'App',
    //此处只是测试一下setup，暂时不考虑响应式的问题。
    setup() {
      let name = "Vue"
      let age = 18
      function sayHello() {
        alert('你好')
      }
      return {
        name,
        age,
        sayHello
      }
    }
  }
</script>
