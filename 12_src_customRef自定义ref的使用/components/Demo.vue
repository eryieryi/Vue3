<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
  import {ref,customRef} from 'vue'
  export default {
    name: 'App',
    setup() {
        function myRef(value){
            let timer
            return customRef((track,trigger)=>{
               return {
                 get(){
                    console.log('有人读取了数据',value)
                    track()// 通知Vue追踪value的变化
                    return value
                },
                set(newValue){
                    console.log('有人修改了数据',newValue)
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        value = newValue
                        trigger()// 通知Vue去重新解析模板
                    }, 500);
                }
               }
            })
        }
        // let keyWord = ref('hello')// 使用Vue提供的ref
        let keyWord = myRef('hello')// 使用程序员自定义的ref
        return {
            keyWord
        }
    }
  }
</script>
