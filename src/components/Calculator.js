import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";

//the style choice here mimics keypad arrangement
const btnProps = [
	{val: "cup", type: "Unit"},
	{val: "1", type: "Number"},
	{val: "2", type: "Number"},
	{val: "3", type: "Number"},
	{val: "/", type: "Operator"},
	{val: "tbsp", type: "Unit"},
	{val: "4", type: "Number"},
	{val: "5", type: "Number"},
	{val: "6", type: "Number"},
	{val: "x", type: "Operator"},
	{val: "tsp", type: "Unit"},
	{val: "7", type: "Number"},
	{val: "8", type: "Number"},
	{val: "9", type: "Number"},
	{val: "-", type: "Operator"},
	{val: "ac", type: "Ac"},
	{val: "del", type: "Del"},
	{val: "0", type: "Number"},
	{val: ".", type: "Number"},
	{val: "+", type: "Operator"}
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
	
	getKeyPressValue = (event) => {
		this.inputHandler(event.key)
	}

	getButtonValue = (event) => {
		this.inputHandler(event.target.value)
	}

	inputHandler = (value) => {
		let string = this.state.display
		if(["Backspace", "del"].includes(value)) {
			this.delete()
		} else if(value === "ac") {
			this.clear()
		} else if(this.state.display.slice(-1) === "t") {
			if(value.toLowerCase() === "b") {
				this.addChar("bsp ")
			} else if(value.toLowerCase() === "s") {
				this.addChar("sp ")
			}
		} else if(allowedChars.includes(value) || !isNaN(value)) {
			this.addChar(value)
		} else if(value.toLowerCase() === "c") {
			this.addChar("cup ")
		}
	}
	
	clear = () => {
		this.setState({display: ""})
	}

	delete = () => {
		let string = this.state.display
		this.setState({ display: string.slice(0, -1)})
	}

	addChar = (value) => {
		let string = this.state.display
		this.setState({ display: string.concat(value) })
	}

	componentDidMount(){
    document.addEventListener("keydown", this.getKeyPressValue);
	}

	render() {
		const btnLayout = btnProps.map((btn, index) => (

			<Button
				key={index}
				btnType={btn.type}
				btnValue={btn.val}
				handlerFunction={this.getButtonValue}
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