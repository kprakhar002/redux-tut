import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User';
// import Home from './Components/Home'
import HomeContainer from './Container/HomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>App Component</h1>
        <User data = {{name:"Prakhar Kumar",age: 29}}></User> */}
        {/* <Home></Home> */}
        <HomeContainer></HomeContainer>
      </div>
    );
  }
}

export default App;
