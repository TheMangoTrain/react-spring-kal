import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import routeLink1 from './views/link1';
import routeLink2 from './views/link2';
import routeLink3 from './views/link3';
import routeLink4 from './views/link4';
import routeHelp from './views/help';
import './assets/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="background"> </div>
      <div className="inner">
        <header>
          <Header />
        </header>
      
        <main style={{ flex: "1" }}>      
          <Route path="/link1" exact component={routeLink1}/>
          <Route path="/link1" component={routeLink2}/>
          <Route path="/link1" component={routeLink3}/>
          <Route path="/link1" component={routeLink4}/>
          <Route path="/help" component={routeHelp}/>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}
