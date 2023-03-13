<template>
    <h4>{{person}}</h4>
    <h1>姓名：{{name}}</h1>
    <h1>年龄：{{age}}</h1>
    <h1>年龄：{{job.j1.salary}}</h1>
    <button @click="name+='~'">点我name改变</button>
    <button @click="age++">点我age+1</button>
    <button @click="job.j1.salary++">点我salary+1</button>
</template>

<script>
  import {reactive,toRefs} from 'vue'
  export default {
    name: 'App',
    setup() {
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })
        return {
            person,
            /* name:toRef(person,'name'),
            age:toRef(person,'age'),
            salary:toRef(person.job.j1,'salary') */
            ...toRefs(person)
        }
    }
  }
</script>
