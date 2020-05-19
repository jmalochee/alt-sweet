import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";
import Qty from "js-quantities"

const btnProps = [
	{val: "cup", type: "unit"},
	{val: "1", type: "number"},
	{val: "2", type: "number"},
	{val: "3", type: "number"},
	{val: "/", type: "operator"},
	{val: "tbsp", type: "unit"},
	{val: "4", type: "number"},
	{val: "5", type: "number"},
	{val: "6", type: "number"},
	{val: "x", type: "operator"},
	{val: "tsp", type: "unit"},
	{val: "7", type: "number"},
	{val: "8", type: "number"},
	{val: "9", type: "number"},
	{val: "-", type: "operator"},
	{val: "ac", type: "ac"},
	{val: "del", type: "del"},
	{val: "0", type: "number"},
	{val: ".", type: "number"},
	{val: "+", type: "operator"}
];

const allowedUnits = ["cup", "tbsp", "tsp"]

const allowedChars = [".", "/", "+", "-", "*", "x"]

//placeholder values
const options = [
	{ name: "triple", value: "3" },
	{ name: "double", value: "2" },
	{ name: "single", value: "1" }
]

const optionElements = options.map((option, index) => (
	<option value={option.value} key={index}> {option.name} </option>
))

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: "",
			amt: {
				qty: "",
				unit: ""
			},
			amts: [],
			from: "",
			to: ""
		}
	}
	
	getKeydownValue = (event) => {
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
			this.unitKeydownHandler(value)
		}
	}

	unitKeydownHandler = (value) => {
		if(this.state.amt.unit.slice(-1) === "t") {
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
		if(this.state.amt.unit !== "") {
			let amt = this.state.amt
			amt.unit = ""
			this.setState({ amt: amt })
		} else if (this.state.amt.qty !=="") {
			let amt = this.state.amt
			amt.qty = amt.qty.slice(0, -1)
			this.setState({ amt: amt })
		} else {
			let amts = this.state.amts
			amts.pop()
			this.setState({ amts: amts })
		}
	}

	addToAmtQty = (value) => {
		let amt = this.state.amt
		amt.qty = amt.qty + value
		this.setState({ amt: amt })
	}

	addToAmtUnit = (value) => {
		let amt = this.state.amt
		amt.unit = amt.unit.concat(value)
		this.setState({ amt: amt })
		if (allowedUnits.includes(amt.unit)) {
			this.newAmt()
		}
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

	selectFrom = (event) => {
		this.setState({ from: event.value })
	}

	selectTo = (event) => {
		this.setState({ to: event.value })
	}

	componentDidMount(){
    document.addEventListener("keydown", this.getKeydownValue)
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
			<div id="calculator">
				<div id="from-to">
					<select 
						name="select-to"
						value={this.state.to} 
						onChange={this.selectTo}
					>
						<option value="" disabled>preferred sweetener</option>
						{optionElements}
					</select>
					<Display 
						id="input-display" 
						end="to"
						amt={this.state.amt}
						amts={this.state.amts}
					/>
					<select 
						name="select-from" 
						value={this.state.from} 
						onChange={this.selectFrom}
					>
						<option value="" disabled>original sweetener</option>
						{optionElements}
					</select>
					<Display
						id="input-display" 
						end="from"
						amt={this.state.amt}
						amts={this.state.amts}
					/>
				</div>
				<div id="keypad">
					{btnLayout}
		    </div>
	    </div>
		)
	}
}

export default Calculator