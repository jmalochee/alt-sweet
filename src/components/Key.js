import React, {Component} from "react"

class Key extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<td className={this.props.type} >
				{ this.props.val }
			</td>
		)
	}
}

export default Key