<template>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="hello">点我hello</button>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    // 接收父组件传递的数据
    props:['msg','school'],
    // 接收父组件传递的方法
    emits:['hello'],
    setup(props,context) {
        // props值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
        console.log('setup中props',props)
        // 上下文对象
        console.log('setup中context',context)
        // 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 this.$attrs
        console.log('setup中context中attrs',context.attrs)
        // 分发自定义事件的函数, 相当于 this.$emit。
        console.log('setup中context中emit',context.emit)
        //  收到的插槽内容, 相当于 this.$slots。
        console.log('setup中context中slots',context.slots)
        let person = reactive({
            name : '张三',
            age : 18
        })
        function hello(){
            context.emit('hello',666)
        }
        return {
            person,
            hello
        }
    }
  }
</script>
