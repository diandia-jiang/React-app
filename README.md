### App-House

#### 目录

src >>> views  
Error-不存在路径匹配404  
Home -首页  
Landlord -房东  
Login -登录  
Mall -商城  
Map -地图  
Message -消息  
Share -分享  
User -我的  

` ==log文件夹/日志==`

> **store**  -   (剔除redux-thunk `action.js`不用) 

* store.js,action.js  
* src/Test文件夹

> api/index===Get/Post请求  

* requestGetData(url)  
* requestPostData (url,params)  

> 接口请求 api文件分组 

* src/api  
* 以自己模块命名文件，  
* 所有请求接口写自己对应的文件  

> **Mock.js**模拟数据
```javascript
//全局安装nodemon
npm i nodemon -g

//启动mock数据服务器
npm run mock
```
地址  
* localhost:3000/api/login //登录  
* localhost:3000/api/reg //注册  
* localhost:3000/api/banner //banner测试   
