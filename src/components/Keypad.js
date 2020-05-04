import React, {Component} from "react";
import Key from "./Key";

class Keypad extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<table className="Keypad">
				<tbody>
	              <tr>
	                <Key 
	                	type="AC" 
	                	val="ac"
	                />
	                <Key 
	                	type="Number" 
	                	val="1"
	                />
	                <Key 
	                	type="Number" 
	                	val="2"
	                />
	                <Key 
	                	type="Number" 
	                	val="3"
	                />
	                <Key 
	                	type="Operator" 
	                	val="/"
	                />
	              </tr>
	              <tr>
	                <Key 
	                	type="Unit" 
	                	val="small"
	                />
	                <Key 
	                	type="Number" 
	                	val="4"
	                />
	                <Key 
	                	type="Number" 
	                	val="5"
	                />
	                <Key 
	                	type="Number" 
	                	val="6"
	                />
	                <Key 
	                	type="Operator" 
	                	val="x"
	                />
	              </tr>
	              <tr>
	                <Key 
	                	type="Unit" 
	                	val="med"
	                />
	                <Key 
	                	type="Number" 
	                	val="7"
	                />
	                <Key 
	                	type="Number" 
	                	val="8"
	                />
	                <Key 
	                	type="Number" 
	                	val="9"
	                />
	                <Key 
	                	type="Operator" 
	                	val="-"
	                />
	              </tr>
	              <tr>
	                <Key 
	                	type="Unit" 
	                	val="big"
	                />
	                <Key 
	                	type="Number" 
	                	val="."
	                />
	                <Key 
	                	type="Number" 
	                	val="0"
	                />
	                <Key 
	                	type="Number" 
	                	val="x/y"
	                />
	                <Key 
	                	type="Operator" 
	                	val="+"
	                />
	              </tr>
	        	</tbody>
            </table>
		)
	}
}

export default Keypad