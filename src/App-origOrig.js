import React from 'react';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import Header from './components/Header';
import Footer from './components/Footer';
import routeLink1 from './views/link1';
import routeLink2 from './views/link2';
import routeLink3 from './views/link3';
import routeLink4 from './views/link4';
import routeStart from './views/start';
import './assets/App.css';

export default function App() {

  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return transitions.map(({ item: location, props, key }) => (

    <div className="App">
    <div className="background"> </div>
    <div className="inner">
      <header>
        <Header />
      </header>
    
      <main style={{ flex: "1" }}>

    <animated.div key={key} style={props}>
      <Switch location={location}>
          <Route path="/" exact component={routeStart}/>
          <Route path="/link1" component={routeLink1}/>
          <Route path="/link2" component={routeLink2}/>
          <Route path="/link3" component={routeLink3}/>
          <Route path="/link4" component={routeLink4}/>
      </Switch>
    </animated.div>

    </main>
      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  ))

 
}
