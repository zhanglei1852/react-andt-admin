import React, { Component } from 'react'
// import layout from './layout.module.less'
import Header from './../Header'
import NavLeft from './../NavLeft'
import Content from './../Content'
import { Row, Col } from 'antd'

class Layout extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span="3">
            <NavLeft></NavLeft>
          </Col>
          <Col span="21">
            <Header></Header>
            <Content >
              { 
                this.props.children
              }
            </Content>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Layout;