import React from 'react';
import './App.css';
import Dice from './rolldice'

class App extends React.Component{
  render(){
    return (
      <div className="App">
       <Dice/>
      </div>
    );
  }
}

export default App;
