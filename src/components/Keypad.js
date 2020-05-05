import React, {Component} from "react";
import Key from "./Key";

class Keypad extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: ""
		}
	}
	
	keyPress = (event, value) => {
		let string = this.state.display
		this.setState({ display: string.concat(value) })
		console.log(this.state.display)
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
						handlerFunction={(event) => (this.keyPress(event, key[0]))}
					/>
				))}
			</tr>
		))

		return(
			<table id="Keypad">
				<tbody>
					{keyLayout}
    		</tbody>
      </table>
		)
	}
}

export default Keypad