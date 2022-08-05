---
    title: create-react-app环境配置
    date: 2022-04-14 00:00:00
    tags:
        - javascript
        - react
    categories:
        - react
    keywords: react
    description: 'create-react-app环境配置'
    cover: /images/react-environment.jpg
    top_img: /images/react-environment.jpg
---

## 一、使用eject(npm run eject)暴露出webpack配置
该方法会直接在项目下生成配置文件，可以直接在配置文件中修改。
***但该过程不可逆，不推荐该种用法***

## 二、使用插件react-app-rewired
react-app-rewired搭配插件customize-cra，在根目录下创建config-overrides.js文件可以覆盖默认配置；
***因react-app-rewired从19年后就没有人维护，也不推荐这种方法***

## 三、使用craco插件
安装
```powershell
yarn add @craco/craco
```
OR
```powershell
npm install @craco/craco
```

在根目录下创建craco.config.js配置
具体使用方法参考官方文档: [https://github.com/gsoft-inc/craco](https://github.com/gsoft-inc/craco)

**关于使用sass配置全局scss文件说明:**
在网上很多人都是这种写法(使用**data**),让我郁闷半天，由于sass-loader的版本不同，这里可能会报错，不同的版本对应的关键字不一样

```javascript
module.exports = {
    style: {
        sass: {
            loaderOptions:{
                data: `@import "~@/variable.scss";`,//sass-loader v8-中，关键字为 “ data ”
                prependData: `@import "~@/variable.scss";`//sass-loader v8中，关键字为 “ prependData ”
                additionalData: `@import "~@/variable.scss";`//sass-loader v10+中，关键字为 “ additionalData ”
            }
        }
    }
}
```

后面再有其他配置问题均会添加到此处，欢迎大佬们多多指导。