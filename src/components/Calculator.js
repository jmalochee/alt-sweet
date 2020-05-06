import React, {Component} from "react";
import Key from "./Key";
import Display from "./Display";

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: ""
		}
	}
	
	buttonHandler = (event, value) => {
		let string = this.state.display
		this.setState({ display: string.concat(value) })
	}

	keyPressHandler = (event) => {
		let string = this.state.display
		this.setState({ display: string.concat(event.key) })
	}

	componentDidMount(){
    document.addEventListener("keypress", this.keyPressHandler);
	}

	render() {
		//the style choice here mimics keypad arrangement
		const keyProps = [
			[["ac","AC"],["1","Number"],["2","Number"],["3","Number"],[" / ","Operator"]],
			[["small","Unit"],["4","Number"],["5","Number"],["6","Number"],[" x ","Operator"]],
			[["med","Unit"],["7","Number"],["8","Number"],["9","Number"],[" - ","Operator"]],
			[["big","Unit"],[".","Number"],["0","Number"],["x/y","Number"],[" + ","Operator"]]
		];

		const keyLayout = keyProps.map((row, index) => (
			<tr key={index} >
				{row.map((key, index) => (
					<Key
						key={index}
						keyType={key[1]}
						keyValue={key[0]}
						handlerFunction={(event) => (this.buttonHandler(event, key[0]))}
					/>
				))}
			</tr>
		))

		return(
			<div id="Calculator">
				<Display value={this.state.display}/>
				<div>
					<table id="Keypad">
						<tbody>
							{keyLayout}
		    		</tbody>
		      </table>
		    </div>
	    </div>
		)
	}
}

export default Calculator