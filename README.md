# 创建一个Vue项目
## 1. 使用 vue-cli 创建
        ## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
        vue --version
        ## 安装或者升级你的@vue/cli
        npm install -g @vue/cli
        ## 创建Vue项目，选择Vue3
        vue create vue_test
        ## 启动
        cd vue_test
        npm run serve

## 2. 使用 vite 创建
        什么是vite？—— 是Vue团队打造的新一代前端构建工具。

        优势如下：

        开发环境中，无需打包操作，可快速的冷启动。
        轻量快速的热重载（HMR）。
        真正的按需编译，不再等待整个应用编译完成。
        传统构建 与 vite构建对比图
            https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af5f8d4493f3423087d6b9e6c5e60fa1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp

        传统构建模式，是将所有资源都打包好，再上线
            https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c57d4d695fe64014b78610ff2a5cd2b6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp

        而Vite有点按需加载的意思在那里了~

        接下来我们就用Vite来创建一个Vue3的项目
            ## 创建工程
            npm init vite-app yk_vue3
            ## 进入工程目录
            cd yk_vue3
            ## 安装依赖
            npm install
            ## 运行
            npm run dev 

#  常用的Composition API
## 拉开序幕的setup
    理解：Vue3.0中一个新的配置项，值为一个函数。
    setup是所有Composition API（组合API）“ 表演的舞台 ”。
    组件中所用到的：数据、方法等等，均要配置在setup中。
    setup函数的两种返回值：
        若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
        若返回一个渲染函数：则可以自定义渲染内容。（了解） (不常用)
        <template>
            <h2>姓名：{{name}}</h2>
            <h2>年龄：{{age}}</h2>
            <button @click="sayHello">hello</button>
        </template>

        <script>
        export default {
            name: 'App',
            //此处只是测试一下setup，暂时不考虑响应式的问题。
            setup() {
                let name = "Vue"
                let age = 18
                function sayHello() {
                    alert('你好')
                }
                return {
                    name,
                    age,
                    sayHello
                }
            }
        }
        </script>

    注意点：

        尽量不要与Vue2.x配置混用

        Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
        但在setup中不能访问到Vue2.x配置（data、methos、computed...）。
        如果有重名, setup优先。


    setup不能是一个async函数，因为返回值不再是对象, 而是promise, 模板看不到return对象中的属性。（后期也
        可以返回一个Promise实例，但需要Suspense和异步组件的配合）


        