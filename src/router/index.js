import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import App from './../App'
import Layout from './../components/Layout'
import Home from './../pages/home'
import Login from './../pages/login'
import NoFound from './../pages/noFound'
import './fade.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class MyRouter extends Component {
  render () {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={ Login }/>
            <Route path="/admin" render= {
              ({ location }) => (
                <Layout>
                  <TransitionGroup>
                    <CSSTransition
                      key={location.pathname}
                      timeout={500}
                      classNames="fade"
                    >
                      <Switch>
                        <Route path="/admin/home" component={ Home }/>
                        <Route component={ NoFound }/>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </Layout>
              )
            }/>
            <Route component={ NoFound }/>
          </Switch>
        </App>
      </Router>
    )
  }
}

export default MyRouter