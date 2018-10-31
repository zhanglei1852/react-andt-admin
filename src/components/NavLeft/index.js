import React , { Component } from 'react'
import navLeft from './navLeft.module.less'
import { Link } from 'react-router-dom'
import menuList from './../../resource/menu'
import { Menu } from 'antd'

const BASE_PATH = '/admin'

class NavLeft extends Component {

  mapMenuList (menuList) {
    return menuList.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} title={item.title}>
            { this.mapMenuList(item.children) }
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={BASE_PATH + item.key}>
            {item.title}
          </Link>
        </Menu.Item>
      )
    })
  }

  render () {
    return (
      <div className={ navLeft.NavLeft }>
        <div className={ navLeft['left-logo'] }>
          React Admin
        </div>
        <Menu  
          mode="inline"
          theme="dark"
          >
          {
            this.mapMenuList(menuList)
          }
        </Menu>
      </div>
    )
  }
}

export default NavLeft