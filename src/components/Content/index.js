import React, { Component } from 'react'
import contentCss from './content.module.less'
class Content extends Component {
  render () {
    return (
      <div  className={contentCss.content}>
        { this.props.children }
      </div>
    )
  }
}

export default Content