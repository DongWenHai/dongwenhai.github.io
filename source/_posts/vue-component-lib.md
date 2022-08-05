---
    title: vue组件库开发
    date: 2022-06-17 00:00:00
    tags:
        - javascript
        - vue
    categories:
        - vue
    keywords: vue
    description: 'vue组件库开发'
    cover: /images/vue.png
    top_img: /images/vue.png
---


## 一、初始化vue项目

使用vue-cli初始化vue项目，比如名称为sea的项目目录
```text
    > sea
       > node_modules
       > public
       > src
         package.json
         babel.config.js
```

## 二、按照需要修改目录

在sea目录下新建一个文件夹packages用于存放我们开发组件的文件，src可以修改名称为examples。

> 这里会遇到几个问题：第一项目默认开发的文件夹是src，所以需要修改webpack配置；第二packages下的代码需要配置一个loader。

我们在sea下新建vue.config.js文件，配置入口页、alias和打包packages的loader；

在项目中准备使用scss，所以同时添加了scss;

```javascript
    //vue.config.js
    const path = require('path');
    module.exports = {
        pages:{
            index:{
                entry: 'examples/main.js',
                template: 'public/index.html',
                filename:'index.html'
            }
        },
        chainWebpack: config => {  //webpack的配置也可以使用configureWebpack选项配置，如下注释部分
            config.module
                .rule('js')
                .include
                .add('/packages')
                .end()
                .use('babel')
                .loader('babel-loader')
            
                config.resolve.alias
                    .set('@', path.resolve('examples'))
        },
        // configureWebpack:{
        //     module:{
        //         rules: [
        //             {
        //                 test: /\.js$/,
        //                 exclude: '/packages',
        //                 use: {
        //                     loader: 'babel-loader',
        //                     options: {
        //                         presets: ['@babel/preset-env']
        //                     }
        //                 }
        //             }
        //         ]
        //     },
        //     resolve:{
        //         alias:{
        //             '@':path.resolve('examples')
        //         }
        //     }
        // },
        css: {
            loaderOptions: {
                scss: {
                    data: `@import "~@/variables.scss";`
                }
            }
        },
        runtimeCompiler: true,
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'scss',
                patterns: []
            }
        }
    }
```

## 三、添加我们的组件

在packages下新建一个index.js用于导出我们的组件库；

新建一个文件夹，比如button，button下新建文件index.js用于导出我们单文件组件，新建src用于当前组件的开发代码，packages/button/src下我们新建index.vue,就是我们的一个组件，组件必须有name，name将作为导入导出的名称和组件名。

```vue
    /packages/button/src/index.vue
    <template>
        <button>这是一个按钮</button>
    </template>
    <script>
        export default {
            name:'seaButton'
        }
    </script>
```

我们在/packages/button/index.js中将seaButton添加一个install方法，用于按需加载时能使用vue的use方法；

```javascript
    //packages/button/index.js
    import seaButton from './src';

    seaButton.install = (Vue) => {
        if(install.installed) return;
        Vue.component(seaButton.name, seaButton)
    }

    export default seaButton;
```

我们在/packages/index.js中导出整个组件库，以及配置单组件导出以供按需引入

```javascript
    //packages/index.js

    import seaButton from './button';

    //components存放所有引入的组件
    const components = [seaButton];
    
    //需要暴露一个install方法来初始化
    const install = (Vue) => {
        if(install.installed) return;
        components.forEach(component => {
            Vue.use(component)
        })
    }


    export default install;

    //其他组件一一导出可按需引入
    export seaButton;
```

最后我们的文件结构是这样的

```text
    > sea
       > node_modules
       > public
       > examples
       ▼ packages
            ▼ button
                ▼ src
                     index.vue
                 index.js
             index.js  
         package.json
         babel.config.js
         vue.config.js
```

## 四、在example中使用组件

引入整个组件

```javascript
    //examples/main.js

    import { createApp } from 'vue'
    import App from './App.vue'

    import seaUI from '/packages';

createApp(App)
    .use(seaUI)
    .mount('#app')
```

按需引入


```javascript
    <template>
        <sea-button></sea-button>
    </template>

    <script>
        import { seaButton } from '/packages';
        export default {
            name: 'page',
            components:{
                seaButton
            }
        }
    </script>
```

## 五、编译组件

作为发布的模块，通常将编译后的组件模块放在lib文件夹下，所以我们添加一个编译组件的命令到package.json中
--target 导出到目标文件
--name 导出文件名称前缀
--dest 指定输出目录

```cmd
    "lib": "vue-cli-service build --target lib --name seaUI --dest lib packages/index.js"
```

## 六、发布组件

发布组件库参考[发布npm包](/2022/05/24/npm-publish/)