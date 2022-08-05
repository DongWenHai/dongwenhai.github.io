---
    title: 发布npm包
    date: 2022-05-24 00:00:00
    tags:
        - npm
    categories:
        - npm
    keywords: npm
    description: '发布npm包'
    cover: /images/npm.svg
    top_img: /images/npm.svg
---

## 一、注册npm账号

在[npm官网](https://www.npmjs.com/)注册账号，然后验证邮箱；

## 二、本地登录

命令行输入

```cmd
npm adduser
```

然后依次输入自己的账户名和密码

## 三、项目添加配置

将要发布的包加入package.json文件，必须包含name,version,main,description等；name为包名，不能重复，安装的时候会使用包名下载；main是主入口;version为发布版本号；

```json
{
    "name":"npmName",
    "version":"0.0.1",
    "main":"index.js",
    "description":"这是描述"
}
```

## 四、发布npm包

命令行输入

```cmd
npm publish
```

上传完成即可。