<template>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名：<input type="text" v-model="person.lastName">
    <br>
    <span>全名：{{person.fullName}}</span>
    <br>
    <input type="text" v-model="person.fullName">
</template>

<script>
  import {reactive,computed} from 'vue'
  export default {
    name: 'App',
    setup() {
        let person = reactive({
            firstName : '张',
            lastName: '三'
        })
        // 计算属性--简写（没有考虑修改）
        /* person.fullName = computed(()=>{
            return person.firstName + '-' + person.lastName
        }) */
        // 计算属性--完整写法（考虑读和写）
        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.lastName
            },
            set(value){
                const arr = value.split('-')
                person.firstName = arr[0]
                person.lastName = arr[1]
            }
        })
        return {
            person
        }
    }
  }
</script>
