<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作：{{job.type}}</h3>
  <h3>薪资：{{job.salary}}</h3>
  <button @click="changeInfo">点击修改数据</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    setup() {
      let name = ref("Vue")
      let age = ref(18)
      let job = ref({
        type : '前端',
        salary : '20k'
      })
      function changeInfo() {
        name.value = '李四'
        age.value = 40
        job.value.type = 'UI'
        job.value.salary = '30k'
      }
      return {
        name,
        age,
        job,
        changeInfo
      }
    }
  }
</script>
