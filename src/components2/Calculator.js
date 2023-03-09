import React from 'react';
import Exercise from "./Exercise";
import Result from "./Result";
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercize: "",
            total: "",
            
        }

    }
   setTotal = () => {
        console.log(eval(this.state.exercize))
        this.setState({ total: eval(this.state.exercize) })
        this.setState({ exercize: "" })
    }
    setExercize = (event) => {
        this.setState({ exercize: `${this.state.exercize} ${event.target.id}` })
    }
    mechack = () => {
        this.setState({ exercize: "" })
        this.setState({ total: "" })
    }


    render() {
        return (
            <div>
                <Exercise exercise={this.state.exercize}/>
                <br />
                <Result total={this.state.total}/>
                <button id="1" onClick={this.setExercize}>1</button>
                <button id="2" onClick={this.setExercize}>2</button>
                <button id="3" onClick={this.setExercize}>3</button>
                <br></br>
                <button id="4" onClick={this.setExercize}>4</button>
                <button id="5" onClick={this.setExercize}>5</button>
                <button id="6" onClick={this.setExercize}>6</button>
                <br></br>
                <button id="7" onClick={this.setExercize}>7</button>
                <button id="8" onClick={this.setExercize}>8</button>
                <button id="9" onClick={this.setExercize}>9</button>
                <br></br>
                <button id="-" onClick={this.setExercize}>-</button>
                <button id="0" onClick={this.setExercize}>0</button>
                <button id="+" onClick={this.setExercize}>+</button>
                <br></br>
                <button id="*" onClick={this.setExercize}>*</button>
                <button id="/" onClick={this.setExercize}>/</button>
                <button id="=" onClick={this.setTotal}>=</button>
                <br></br>
                
               <br></br>
               <button onClick={this.mechack}>אפס</button>
                
            </div>
        )
    }

}
export default Calculator;