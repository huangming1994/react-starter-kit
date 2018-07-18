# react-ele-starter

### 目录结构
```
- build
    | - config.js  打包的配置文件
    | - index.html   模板html
    | - webpack.base.js   webpack基础通用配置
    | - webpack.local.js   webpack本地配置环境
    | - webpack.dev.js    webpack测试环境配置
    | - webpack.prod.js   webpack生产环境配置
- src
    | - api    接口api
    | - components    公用组件
    | - env    一些环境地址配置
    | - middleware    中间件
    | - pages    路由page
    | - routes   路由
    | - utils   工具类函数
    | - App.js 	入口文件
    | - reducers.js  全局reducers文件
    | - store.js    全局store文件
```

注: container下是每个对应的page文件夹，每个文件夹对应一个reducers.js，一个actions.js，一个index.js。
```
- containers
    | - xxxPage
       | - reducers.js  单文件reducers.js
       | - actions.js   单文件actions.js
       | - index.js     单文件入口

```

### Get Start
```
npm i   安装依赖
npm run dev   启服务
```
