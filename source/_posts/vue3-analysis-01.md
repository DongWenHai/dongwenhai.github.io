---
    title: vue3源码解析(一)
    date: 2022-04-27 00:00:00
    tags:
        - javascript
        - vue
    categories:
        - vue
    keywords: vue
    description: 'vue3源码解析'
    cover: /images/vue-analysis.png
    top_img: /images/vue-analysis.png
---

# vue3源码下载地址

```git
    git clone https://github.com/vuejs/core.git
```

# vue3源码目录

vue3采用了单包模式，分离了不同模块，核心源码文件都在packages文件夹下，主要功能如下。

    |— core
        |— .github
        |— .vscode
        |— packages
            |— compiler-core                //核心编译器
            |— compiler-dom                 //dom编译器
            |— compiler-sfc                 //单文件组件编译器
            |— compiler-ssr
            |— reactivity-transform
            |— reactivity                   //响应式数据模块
            |— runtime-core                 //运行时核心代码
            |— runtime-dom                  //浏览器环境运行时核心
            |— runtime-test                 //自动化测试
            |— server-renderer              //SSR服务端渲染逻辑
            |— sfc-playground
            |— shared                       //共享的公共工具
            |— size-check                   //用于测试 tree shaking 后代码大小的示例库
            |— template-explorer            //用于检查模板编译后的输出，主要用于开发调试
            |— vue-compat
            |— vue                          //主入口，包括运行时和编译器
            |— global.d.ts                  //全局TS配置
        |— scripts
        |— test-dts
        |— .eslintrc.js
        |— .gitignore
        |— .prettierrc
        |— BACKERS.md
        |— CHANGELOG.md
        |— LICENSE
        |— README.md
        |— SECURITY.md
        |— api-extractor.json
        |— jest.config.js
        |— netlify.toml
        |— package.json
        |— pnpm-lock.yaml
        |— pnpm-workspace.yaml
        |— rollup.config.js
        |— tsconfig.json
        