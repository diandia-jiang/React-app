import React from 'react'

class UI extends React.Component {
  componentDidMount () {
  }

  render () {
    console.log(this.props)
    return (
      <div className = "box">
        <header className="header">房东头部</header>
        <div className="content">房东内容</div>
      </div>
    )
  }
}

export default UI