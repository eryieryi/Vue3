<template>
    <h1>sum值为：{{sum}}</h1>
    <button @click="sum++">点我sum+1</button>
    <h1>msg值为：{{msg}}</h1>
    <button @click="msg+='!'">点我msg变化</button>
    <hr>
    <h1>姓名：{{person.name}}</h1>
    <h1>年龄：{{person.age}}</h1>
    <h1>年龄：{{person.job.j1.salary}}</h1>
    <button @click="person.name+='~'">点我name改变</button>
    <button @click="person.age++">点我age+1</button>
    <button @click="person.job.j1.salary++">点我salary+1</button>
</template>

<script>
  import {ref,reactive,watchEffect} from 'vue'
  export default {
    name: 'App',
    setup() {
        let sum = ref(0)
        let msg = ref('你好')
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
        watchEffect(()=>{
            const x = sum.value
            console.log('watchEffect函数调用了',x)
        })

        return {
            sum,
            msg,
            person
        }
    }
  }
</script>
