<template>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>工作：{{person.job.type}}</h3>
  <h3>薪资：{{person.job.salary}}</h3>
  <button @click="changeInfo">点击修改数据</button>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    setup() {
      let person = reactive({
        name : '张三',
        age : 18,
        job:{
          type : '前端',
          salary : '20k'
        }
      })
      function changeInfo() {
        person.name = '李四'
        person.age = 40
        person.job.type = 'UI'
        person.job.salary = '30k'
      }
      return {
        person,
        changeInfo
      }
    }
  }
</script>
