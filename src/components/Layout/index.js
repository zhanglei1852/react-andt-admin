import React, { Component } from 'react'
// import layout from './layout.module.less'
import Header from './../Header'
import NavLeft from './../NavLeft'
import Content from './../Content'
import { Row, Col } from 'antd'
import './layout.less'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Layout extends Component {

  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentDidMount () {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <div onClick={ this.handleClick }>
        <Row>
          <Col span="3">
            <NavLeft></NavLeft>
          </Col>
          <Col span="21">
            <Header></Header>
            <Content >
              <TransitionGroup>
              <CSSTransition
                  in={this.state.show}
                  timeout={10000}
                  classNames="pageFade"
                  onEnter={ this.handleExit }
                >
                  {this.props.children}
                </CSSTransition>
              </TransitionGroup>
                
            </Content>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Layout;