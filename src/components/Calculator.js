import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";
import Qty from "js-quantities"

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

const unitFormat = {
	cu: "cup",
	tb: "tbsp",
	ts: "tsp"
}

const allowedUnits = ["cup", "tbsp", "tsp"]

const allowedChars = [".", "/", "+", "-", "*", "x"]

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: "",
			amt: {
				qty: "",
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
		if(["Backspace", "del"].includes(value)) {
			this.delete()
		} else if(value === "ac") {
			this.clear()
		} else if(allowedChars.includes(value) || !isNaN(value)) {
			if(this.state.amt.unit === "") {
				this.addToAmtQty(value)
			}
		} else if(this.state.amt.qty !== "") {
			this.unitHandler(value)
		}
	}

	unitHandler = (value) => {
		console.log("unitHandler")
		if(this.state.amt.unit.slice(-1) === "t") {
			console.log("in")
			if(value.toLowerCase() === "b") {
				this.addToAmtUnit("bsp")
			} else if(value.toLowerCase() === "s") {
				this.addToAmtUnit("sp")
			}
		} else if(value.toLowerCase() === "c") {
			this.addToAmtUnit("cup")
		} else if(allowedUnits.concat(["t"]).includes(value)) {
			this.addToAmtUnit(value)
		}
	}

	clear = () => {
		this.setState({
			display: "",
			amt: {
				qty: "",
				unit: ""
			},
			amts: []
		})
	}

	delete = () => {
		this.setDisplay()
	}

	addToAmtQty = (value) => {
		let amt = this.state.amt
		amt.qty = amt.qty + value
		this.setState({ amt: amt })
		this.setDisplay()
	}

	addToAmtUnit = (value) => {
		let amt = this.state.amt
		amt.unit = amt.unit.concat(value)
		this.setState({ amt: amt })
		this.setDisplay()
		if (allowedUnits.includes(amt.unit)) {
			this.newAmt()
		}
	}

	setDisplay = () => {
		let amts = this.state.amts
		let display = ""
		amts.forEach(amt => {
			display += (amt.scalar.toString() + unitFormat[amt._units] + " ")
		})
		display += (this.state.amt.qty + this.state.amt.unit)
		this.setState({ display: display })
	}

	newAmt = () => {
		let qty = Qty(this.state.amt.qty + this.state.amt.unit)
		let amts = this.state.amts
		amts.push(qty)
		this.setState({ 
			amts: amts,
			amt: {
				qty: "",
				unit: ""
			}
		})		
	}

	componentDidMount(){
    document.addEventListener("keydown", this.getKeyPressValue)
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