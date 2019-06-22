import React from 'react'

class UI extends React.Component {
  componentDidMount () {
    this.props.getDataInit()
  }

  render () {
    console.log(this.props)
    return (
       <div className = "box">
        <header className="header">消息头部</header>
        <div className="content">消息内容</div>
      </div>
    )
  }
}

export default UI