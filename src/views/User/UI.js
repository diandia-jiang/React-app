import React from 'react'
import { Icon } from 'antd-mobile';
class UI extends React.Component {
  componentDidMount () {
  }

  render () {
    console.log(this.props)
    return (
      <div className = "box">
        <header className="header-user" ><Icon type="left" size = "lg" /></header>
        <div className="content-user">
          <p>你好，欢迎来到柚家</p>
        </div>
      </div>
    )
  }
}

export default UI