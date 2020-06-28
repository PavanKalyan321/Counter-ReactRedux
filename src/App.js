import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header';
import Home from './pages/Home';
import { connect } from 'react-redux';
import Footer from './components/footer';
import Test from './pages/test';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/test" exact component={Test} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(App);