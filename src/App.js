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

  let currentRoute = useCurrentRoute()
  let viewElement = useViewElement()
  let transitions = useTransition(viewElement, currentRoute.url.href, {
    from: { opacity: 0, transform: 'scale(0.5) translateY(-50%)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
    leave: { opacity: 0, transform: 'scale(0.5) translateY(50%)' },
  })

  return transitions.map(({ item, props: style, key, state }) =>
    <animated.div key={key} style={{
      ...style,
      position: 'absolute',
      top: 0,
      width: '100%',
    }}>
      {item}
    </animated.div>
  

    <div className="App">
    <div className="background"> </div>
    <div className="inner">
      <header>
        <Header />
      </header>
    
      <main style={{ flex: "1" }}>

      <div className="main" onClick={this.toggle}>
      <animated.div key={key} style={{
      ...style,
      position: 'absolute',
      top: 0,
      width: '100%',
    }}>
          {index => pages[index]}
          </animated.div>
      </div>

    </main>
      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  )

 
}
