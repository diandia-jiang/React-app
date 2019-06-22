import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => (
<footer className="footer">
<ul>
  <li>
    <NavLink to= "/home" >
      <span className="iconfont icon-wap-home"></span>
      <p>首页</p>
    </NavLink>
  </li>
  <li>
    <NavLink to= "/news" >
      <span className="iconfont icon-weapp-nav"></span>
      <p>消息</p>
    </NavLink>
  </li>
  <li>
    <NavLink to= "/house" >
      <span className="iconfont icon-shopping-cart-o"></span>
      <p>房东</p>
    </NavLink>
  </li>
  <li>
    <NavLink to= "/user" >
      <span className="iconfont icon-user-o"></span>
      <p>我的</p>
    </NavLink>
  </li>
</ul>
</footer>
)

export default Footer;