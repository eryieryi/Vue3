<template>
    <div class="demo">
        <h2>demo组件</h2>
        {{sum}}
    </div>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    async setup() {
        let sum = ref(0)
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({sum})
            }, 1000);
        })
        return await p
    }
  }
</script>

<style lang="css">
    .demo{
        background-color: skyblue;
        padding: 10px;
    }
</style>
