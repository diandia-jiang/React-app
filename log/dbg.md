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

1. node-sass  
2. 状态管理redux->状态管理分离  
3. 视图,逻辑分离react-redux -index,UI  
4. 路由分组 - App.js  
5. action 分离-  redux-thunk  
6. api/index get/post封装 
7. lib  
8. antd-mobile  
9. 剔除thunk 

00. Loading  ----

**store**  -  **action**  
src/Test文件夹  

api/index===Get/Post请求  
requestGetData(url)  
requestPostData (url,params)  



UI协调
图标，用户交互效果，黏粘性，app特色亮点功能

python协调

```javascript
RESTful API
	在Restful之前的操作：
		增 POST /user/save POST 新增用户
		// 删 GET|POST /user/delete  删除用户信息
		改 POST /user/update POST 修改用户信息
		查 GET /user/query/1   根据用户id查询用户数据

	RESTful风格：
		增 POST /user  body中包含数据
		删 DELETE /user/1 | user?id=1 根据ID删除用户信息
		改 PUT|PATCH /user body中包含数据 PUT覆盖修改 PATCH局部修改
		查 GET /user/1 | user?id=1 GET  根据用户id查询用户数据 没有id查询所有 /1 返对象 id=1 返回数组>对象
		
分页	_page 第几页， _limit一页多少条
    GET /user?_page=7  不传递默认10条
    GET /user?_page=7&_limit=20
排序 _sort设定排序的字段 _order设定排序的方式（默认升序）
    GET /user?_sort=views&_order=asc
    GET /user/1/comments?_sort=votes&_order=asc
    GET /user?_sort=title,views&_order=desc,asc 	多个字段排序
任意切片数据 _start 开始不包含  _end 结束包含
    GET /users?_start=20&_end=30
    GET /user/1/comments?_start=20&_end=30
    GET /user/1/comments?_start=20&_limit=10
全文检索	GET /user?q=上海
```
