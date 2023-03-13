<template>
  <h1>Test组件</h1>
  <h2>鼠标坐标是：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
    import usePoint from '../hooks/usePoint'
    export default {
        name:'Test',
        setup() {
          let point = usePoint()
          return {point}
        }
    }
</script>
