import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: ""
		}
	}
	
	buttonHandler = (event) => {
		let string = this.state.display
		this.setState({ display: string.concat(event.target.value) })
	}

	keyPressHandler = (event) => {
		let string = this.state.display
		this.setState({ display: string.concat(event.key) })
		console.log(event)
	}

	inputHandler = (event) => {
		console.log(event.target.value)
		if(event.target.value === "." || !isNaN(event.target.value))
			this.buttonHandler(event)
		else if(event.target.value === "ac")
			this.acHandler()
	}

	componentDidMount(){
    document.addEventListener("keypress", this.keyPressHandler);
	}

	acHandler = () => {
		this.setState({display: ""})
	}

	render() {
		//the style choice here mimics keypad arrangement
		const btnProps = [
			["ac","AC"],["1","Number"],["2","Number"],["3","Number"],[" / ","Operator"],
			["small","Unit"],["4","Number"],["5","Number"],["6","Number"],[" x ","Operator"],
			["med","Unit"],["7","Number"],["8","Number"],["9","Number"],[" - ","Operator"],
			["big","Unit"],[".","Number"],["0","Number"],["x/y","Number"],[" + ","Operator"]
		];

		const btnLayout = btnProps.map((btn, index) => (
			<Button
				key={index}
				btnType={btn[1]}
				btnValue={btn[0]}
				handlerFunction={(event) => this.inputHandler(event)}
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