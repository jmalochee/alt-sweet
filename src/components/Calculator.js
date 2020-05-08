import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";

//the style choice here mimics keypad arrangement
const btnProps = [
	["cup","Unit"],["1","Number"],["2","Number"],["3","Number"],["/","Operator"],
	["tbsp","Unit"],["4","Number"],["5","Number"],["6","Number"],["x","Operator"],
	["tsp","Unit"],["7","Number"],["8","Number"],["9","Number"],["-","Operator"],
	["ac","Clear"],["del", "Clear"],["0","Number"],[".","Number"],["+","Operator"]
];

const allowedChars = [".", "/", "+", "-", "*", "x", "t", "cup", "tsp", "tbsp"]

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: "",
			amt: {
				qty: 0,
				unit: ""
			},
			amts: []
		}
	}
	
	keyPressHandler = (event) => {
		let string = this.state.display
		if(event.key === "Backspace") {
			this.setState({ display: string.slice(0, -1)})
		} else if(this.state.display.slice(-1) === "t") {
			if(event.key.toLowerCase() === "b") {
				this.setState({ display: string.concat("bsp ")})
			} else if(event.key.toLowerCase() === "s") {
				this.setState({ display: string.concat("sp ")})
			}
		} else if(allowedChars.includes(event.key) || !isNaN(event.key)) {
			this.setState({ display: string.concat(event.key) })
		} else if(event.key.toLowerCase() === "c") {
			this.setState({ display: string.concat("cup ") })
		}
	}
	
	acHandler = () => {
		this.setState({display: ""})
	}

	delHandler = () => {
		let string = this.state.display
		this.setState({ display: string.slice(0, -1)})
	}

	numberHandler = (event) => {
		let string = this.state.display
		this.setState({ display: string.concat(event.target.value) })
	}

	buttonHandler = (event) => {
		if(allowedChars.includes(event.target.value) || !isNaN(event.target.value)) {
			this.numberHandler(event)
		} else if(event.target.value === "ac") {
			this.acHandler()
		} else if(event.target.value === "del") {
			this.delHandler()
		} else if (event.target.value.toLowerCase() === "t") {
			this.numberHandler(event)
		}
	}

	componentDidMount(){
    document.addEventListener("keydown", this.keyPressHandler);
	}

	render() {
		const btnLayout = btnProps.map((btn, index) => (
			<Button
				key={index}
				btnType={btn[1]}
				btnValue={btn[0]}
				handlerFunction={(event) => this.buttonHandler(event)}
			/>
		))

		return(
			<div id="Calculator">
				<Display value={this.state.display}/>
				<div id="Keypad">
					{btnLayout}
		    </div>
	    </div>
		)
	}
}

export default Calculator