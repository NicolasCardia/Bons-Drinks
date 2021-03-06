import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import React, { useEffect, useState} from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import Sobre from './pages/aboutWe/index'
import Drinks from './pages/drinks';
import Loading from './components/loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])


  return (

    loading ? <Loading /> :

    <div className="main">
      
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route path="/sobreNos" >
            <Sobre />
          </Route>
          <Route path="/drinks" >
            <Drinks />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  )

}



