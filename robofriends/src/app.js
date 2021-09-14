import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import Card from './card';
import Cardlist from'./cardlist';
import 'tachyons';
import SearchBox from './searchbox';
import {robots} from './robots';
import './app.css'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: robots,
            searchfield:""
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value});
       
    }
    render(){
        const filteredRobots= this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist robots={filteredRobots}/>
        </div>
        );
    }
}
export default App;
