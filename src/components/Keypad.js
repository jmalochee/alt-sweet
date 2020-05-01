import React, {Component} from "react"

class Keypad extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<table className="Keypad">
				<tbody>
	              <tr>
	                <td className="AC"> ac </td>
	                <td className="Number"> 1 </td>
	                <td className="Number"> 2 </td>
	                <td className="Number"> 3 </td>
	                <td className="Operator"> / </td>
	              </tr>
	              <tr>
	                <td className="Unit"> med </td>
	                <td className="Number"> 4 </td>
	                <td className="Number"> 5 </td>
	                <td className="Number"> 6 </td>
	                <td className="Operator"> x </td>
	              </tr>
	              <tr>
	                <td className="Unit"> small </td>
	                <td className="Number"> 7 </td>
	                <td className="Number"> 8 </td>
	                <td className="Number"> 9 </td>
	                <td className="Operator">- </td>
	              </tr>
	              <tr>
	                <td className="Unit"> big </td>
	                <td className="Number"> . </td>
	                <td className="Number"> 0 </td>
	                <td className="Number"> x/y </td>
	                <td className="Operator"> + </td>
	              </tr>
	        	</tbody>
            </table>
		)
	}
}

export default Keypad