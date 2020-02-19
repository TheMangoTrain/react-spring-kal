import React from 'react';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'
import Header from './components/Header';
import Footer from './components/Footer';
import routeLink1 from './views/link1';
import routeLink2 from './views/link2';
import routeLink3 from './views/link3';
import routeLink4 from './views/link4';
import routeStart from './views/start';
import './assets/App.css';

const pages = [



  style => (
    <animated.div style={{ ...style, background: '#b3FFBD' }}><Route path="/" exact component={routeStart}/></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#B2DBBF' }}><Route path="/link1" component={routeLink1}/></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#12DBBF' }}><Route path="/link2" component={routeLink2}/></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#12DBBF' }}><Route path="/link3" component={routeLink4}/></animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: '#12DBBF' }}><Route path="/link4" component={routeLink4}/></animated.div>
  ),
]


export default function App() {

  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({
      index: state.index === 4 ? 0 : state.index + 1,
    }))

  return (

    <div className="App">
    <div className="background"> </div>
    <div className="inner">
      <header>
        <Header />
      </header>
    
      <main style={{ flex: "1" }}>

      <div className="main" onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
          {index => pages[index]}
        </Transition>
      </div>

    </main>
      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  )

 
}
