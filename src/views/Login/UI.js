import React from 'react';
import axios from 'axios';
import { Toast } from 'antd-mobile';
class UI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: '',
      data : ''
    }
    this.userChange = this.userChange.bind(this)
    this.submit = this.submit.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
  }
  userChange (e) {
    this.setState({
      user: e.target.value
    })
  }
  passwordChange (e) {
    this.setState({
      password: e.target.value
    })
  }
  submit (e) {
    e.preventDefault();
    if (!(/^1[3456789]\d{9}$/.test(this.state.user))) {
        alert('手机号输入有误')
    } else if (this.state.user === "") {
        alert('手机号不能为空')
    } else {
      axios.get("http://www.daxunxun.com/users/sendCode?tel=" + this.state.user).then(res => {
        if (res.data === 0) {
          alert('获取验证码失败')
        } else if (res.data === 1) {
          alert('该手机号已注册')
        } else {
          this.setState({
            data: res.data.code
          })
        }
        
      })
    }
  }
  goLogin () {
    if (this.state.user === "") {
      alert('手机号不能为空')
    }else if (this.state.password === "") {
      alert('验证码不能为空')
    } else if (this.state.password !== this.state.data) {
      Toast.info('验证码不正确')
    } else {
      alert("登陆成功")
    }
  }
  render () {
    return (
      <div className = "box">
        <header className="header-user" ><span className = "iconfont iconleft"></span></header>
        <div className="content-user">
          <p>你好，欢迎来到柚家</p>
          <form>
            <div className = "tel"><input type="text" className = "num" placeholder="请输入手机号" onChange = {this.userChange}/><button onClick = {this.submit}>获取验证码</button></div>
            <div className = "tel"><input type="text" placeholder="请输入验证码" onChange = {this.passwordChange}/></div>
          </form>
          <div className = "login-button">
            <div className = "login" onClick = {this.goLogin.bind(this)}>同 意 协 议 并 登 录</div>
            <span>账号密码登录</span>
          </div>
          <div className = "login-other">
            <i></i>其他方式登录<i></i>
          </div>
          <div className = "agreement" >
          注册 / 登录即代表同意《柚家用户使用协议》
          </div>
        </div>
      </div>
    )
  }
}

export default UI