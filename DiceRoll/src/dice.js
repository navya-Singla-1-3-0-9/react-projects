import React from 'react'
import './die.css'
class Dice extends React.Component{
    render(props){
        return (
            <span>
                
                <i className={ `die fas fa-dice-${this.props.face} ${this.props.shaking===true?"shaking":''}`}></i>
            </span>
        );
    }
}
export default Dice;