import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";
import Qty from "js-quantities"
import SelectField from "./SelectField"

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
			<div id="Calculator">
				<div id="from-to">
					<div id="from">
						<SelectField 
							name="select-from"
							label="recipe sweetner"
							selectedOption={this.state.from}
							handlerFunction={this.selectFrom}
						/>
					</div>
					<div id="to">
						<SelectField 
							name="select-to"
							label="preferred sweetner"
							selectedOption={this.state.to}
							handlerFunction={this.selectTo}
						/>
					</div>
				</div>
				<Display 
					amt={this.state.amt}
					amts={this.state.amts}
				/>
				<div id="Keypad">
					{btnLayout}
		    </div>
	    </div>
		)
	}
}

export default Calculator