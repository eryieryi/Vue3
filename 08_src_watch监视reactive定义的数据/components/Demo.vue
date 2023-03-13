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
  import {ref,watch,reactive} from 'vue'
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
        
        // 1.监视ref定义的一个响应式数据
        /* watch(sum,(newValue,oldValue)=>{
            console.log('sum值变了',newValue,oldValue)
        },{immediate:true}) */

        // 2.监视ref定义的多个响应式数据
        /* watch([sum,msg],(newValue,oldValue)=>{
            console.log('sum或msg值变了',newValue,oldValue)
        },{immediate:true}) */

        // 3.监视reactive定义的一个响应式数据的全部属性，注意：此处无法正确获取oldValue，强制开启深度复制（deep配置无效）
        /* watch(person,(newValue,oldValue)=>{
            console.log('person变了',newValue,oldValue)
        },{deep:false}) // 此处deep配置无效 */

        // 4.监视reactive定义的一个响应式数据的某个属性
        /* watch(()=>{return person.name},(newValue,oldValue)=>{
            console.log('person的name变了',newValue,oldValue)
        }) */

        // 5.监视reactive定义的一个响应式数据的某些属性
        /* watch([()=>{return person.name},()=>{return person.age}],(newValue,oldValue)=>{
            console.log('person的name或者age变了',newValue,oldValue)
        }) */

        // reactive中的注意事项：此处监视的是reactive所定义的对象中的某个属性，所以deep配置有效
        watch(()=>{return person.job},(newValue,oldValue)=>{
            console.log('person的job变了',newValue,oldValue)
        },{deep:true})// 此处监视的是reactive所定义的对象中的某个属性，所以deep配置有效
        return {
            sum,
            msg,
            person
        }
    }
  }
</script>
