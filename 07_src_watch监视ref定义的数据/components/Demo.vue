<template>
    <h1>sum值为：{{sum}}</h1>
    <button @click="sum++">点我sum+1</button>
    <h1>msg值为：{{msg}}</h1>
    <button @click="msg+='!'">点我msg变化</button>
</template>

<script>
  import {ref,watch} from 'vue'
  export default {
    name: 'App',
    setup() {
        let sum = ref(0)
        let msg = ref('你好')
        
        // 1.监视ref定义的一个响应式数据
        /* watch(sum,(newValue,oldValue)=>{
            console.log('sum值变了',newValue,oldValue)
        },{immediate:true}) */

        // 2.监视ref定义的多个响应式数据
        watch([sum,msg],(newValue,oldValue)=>{
            console.log('sum或msg值变了',newValue,oldValue)
        },{immediate:true})

        return {
            sum,
            msg
        }
    }
  }
</script>
