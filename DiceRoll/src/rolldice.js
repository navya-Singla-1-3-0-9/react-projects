import React from "react";
import Die from './dice';
import './rolldice.css'

class RollDice extends React.Component{
    static defaultProps={
        faces:["one","two","three","four","five","six"]
    }
    constructor(props){
       
        super();
        this.state={
            die1:'one',
            die2:'one',
            rolling:false
        }
        this.roll= this.roll.bind(this);
      
    }
    roll(){
        const newDie1=this.props.faces[
            Math.floor(Math.random()*6)
        ];
        const newDie2=this.props.faces[
            Math.floor(Math.random()*6)
        ];
        this.setState({rolling:true});
       
        setTimeout(()=>{
            this.setState({die1:newDie1,die2:newDie2,rolling:false});
        },1000)
      
    }
    render(){
        console.log("rendering");
        return(
            <div className="rolldice">
                <div>
                    <Die face={this.state.die1} shaking={this.state.rolling}/>
                    <Die face={this.state.die2} shaking={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling===false?"Roll Dice!":"Rolling..." } </button>
            </div>
        );
    }
}
export default RollDice;