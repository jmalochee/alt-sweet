import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";
import Qty from "js-quantities"
import ConvertBox from "./ConvertBox"

//the style choice here mimics keypad arrangement
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
			<div id="calculator">
				<div id="from-to">
					<ConvertBox 
						convertSide="from"
						label="recipe sweetner"
						amt={this.state.amt}
						amts={this.state.amts}
						selectedOption={this.state.from}
						selectHandlerFunction={this.selectFrom}
					/>
					<ConvertBox 
						convertSide="to"
						label="preferred sweetner"
						amt={this.state.amt}
						amts={this.state.amts}
						selectedOption={this.state.to}
						selectHandlerFunction={this.selectTo}
					/>
				</div>
				<Display
					id="input-display" 
					amt={this.state.amt}
					amts={this.state.amts}
				/>
				<div id="keypad">
					{btnLayout}
		    </div>
	    </div>
		)
	}
}

export default Calculator