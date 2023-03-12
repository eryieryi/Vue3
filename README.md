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

        