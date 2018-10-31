import React , { Component } from 'react'
import headerCss from './headerCss.module.less'
import { Icon , Button} from 'antd'

class Header extends Component {
  render () {
    return (
      <div className={ headerCss.headerContainer }>
        <Button type="primary" className={headerCss.fold}>
          <Icon type='menu-unfold'/>
        </Button>
        <div className={ headerCss.headerInfo }>
          欢迎您,admin
          <Icon
            className = {headerCss.headerIcon}
            type="user" 
            theme="outlined" 
          />
        </div>
      </div>
    )
  }
}

export default Header