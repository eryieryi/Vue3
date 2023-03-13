<template>
    <h1>sum值为：{{sum}}</h1>
    <button @click="sum++">点我sum+1</button>
    <hr>
    <h2>鼠标坐标是：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
  import {ref} from 'vue'
  import usePoint from '../hooks/usePoint'
  export default {
    name: 'App',
    setup() {
        let sum = ref(0)
        
        let point = usePoint()
        
        return {
            sum,
            point
        }
    }
  }
</script>
