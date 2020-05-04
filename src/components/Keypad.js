import React, {Component} from "react";
import Key from "./Key";

class Keypad extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: ""
		}
		this.keyPress = this.keyPress.bind(this)
	}

	keyPress(event) {
		let value = event.target.getAttribute('value')
		let string = this.state.display
		this.setState({ display: string.concat(value) })
		console.log(this.state.display)
	}

	render() {
		return(
			<table id="Keypad">
				<tbody>
	              <tr>
	                <Key 
	                	keyType="AC" 
	                	keyValue="ac"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="1"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="2"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="3"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Operator" 
	                	keyValue=" / "
	                	handlerFunction={this.keyPress}
	                />
	              </tr>
	              <tr>
	                <Key 
	                	keyType="Unit" 
	                	keyValue="small"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="4"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="5"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="6"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Operator" 
	                	keyValue=" x "
	                	handlerFunction={this.keyPress}
	                />
	              </tr>
	              <tr>
	                <Key 
	                	keyType="Unit" 
	                	keyValue="med"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="7"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="8"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="9"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Operator" 
	                	keyValue=" - "
	                	handlerFunction={this.keyPress}
	                />
	              </tr>
	              <tr>
	                <Key 
	                	keyType="Unit" 
	                	keyValue="big"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="."
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="0"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Number" 
	                	keyValue="x/y"
	                	handlerFunction={this.keyPress}
	                />
	                <Key 
	                	keyType="Operator" 
	                	keyValue=" + "
	                	handlerFunction={this.keyPress}
	                />
	              </tr>
	        	</tbody>
            </table>
		)
	}
}

export default Keypad