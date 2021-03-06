import React, { Component } from 'react'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import InputDetails from './InputDetails'
import ProductDetail from './ProductDetail'
import AllProducts from './AllProducts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {

    render() {

      return (
        <Router>
        <div className="container">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/inputdetials" component={InputDetails}/>
          <Route path="/products" exact component={AllProducts}/>
          <Route path="/products/:id" component={ProductDetail}/>
          </Switch>
        </div>
        </Router>
      )
    }

  }

export default App