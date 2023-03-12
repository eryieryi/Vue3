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

## ref 函数

    作用: 定义一个响应式的数据
    语法: const xxx = ref(initValue)
        创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。
        JS中操作数据： xxx.value
        模板中读取数据: 不需要.value，直接：<div>{{xxx}}</div>

    备注：
        接收的数据可以是：基本类型、也可以是对象类型。
        基本类型的数据：响应式依靠的是类上的getter与setter完成的（我们等下看下源码你就知道了）。
        对象类型的数据：内部 “ 求助 ” 了Vue3.0中的一个新函数—— reactive函数。

## reactive函数

    作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）
    语法：const 代理对象= reactive(源对象)接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
    reactive定义的响应式数据是“深层次的”。
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## Vue3.0中的响应式原理
### Vue2.x的响应式

        实现原理
        对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）。
        数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。
            Object.defineProperty(data, 'count', {
                get () {}, 
                set () {}
            })
        存在问题
            新增属性、删除属性, 界面不会更新。
            直接通过下标修改数组, 界面不会自动更新。

        解决方案
            使用Vue.set、Vue.delete或者vm.$set、vm.$delete这些API

        模拟Vue2中实现响应式
            //源数据
            let person = {
                name:'张三',
                age:18
            }
            //模拟Vue2中实现响应式
            let p = {}
            Object.defineProperty(p,'name',{
                configurable:true,
                get(){ //有人读取name时调用
                    return person.name
                },
                set(value){ //有人修改name时调用
                    console.log('有人修改了name属性，我发现了，我要去更新界面！')
                    person.name = value
                }
            })
            Object.defineProperty(p,'age',{
                get(){ //有人读取age时调用
                    return person.age
                },
                set(value){ //有人修改age时调用
                    console.log('有人修改了age属性，我发现了，我要去更新界面！')
                    person.age = value
                }
            })

### Vue3.0的响应式
    实现原理

        通过Proxy（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
        通过Reflect（反射）:  对源对象的属性进行操作。
        MDN文档中描述的Proxy与Reflect：
            Proxy： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
            Reflect： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

        关于代理与反射，可以看这篇博文

        模拟Vue3中实现响应式

            let person = {
                name:'张三',
                age:18
            }
            const p = new Proxy(person,{
                //有人读取p的某个属性时调用
                get(target,propName){
                    console.log(`有人读取了p身上的${propName}属性`)
                    // return target[propName]
                    return Reflect.get(target,propName)
                },
                //有人修改p的某个属性、或给p追加某个属性时调用
                set(target,propName,value){
                    console.log(`有人修改了p身上的${propName}属性，我要去更新界面了！`)
                    // target[propName] = value
                    return Reflect.set(target,propName,value)
                },
                //有人删除p的某个属性时调用
                deleteProperty(target,propName){
                    console.log(`有人删除了p身上的${propName}属性，我要去更新界面了！`)
                    // return delete target[propName]
                    return Reflect.deleteProperty(target,propName)
                }
            })

##  reactive对比ref

    从定义数据角度对比
        ref用来定义：基本类型数据。
        reactive用来定义：对象（或数组）类型数据。
        备注：ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过reactive转为代理对象。

    从原理角度对比
        ref通过类中的的getter与setter来实现响应式（数据劫持）。
        reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。

    从使用角度对比
        ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value。
        reactive定义的数据：操作数据与读取数据：均不需要.value。

                            