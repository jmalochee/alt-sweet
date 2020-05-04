import React, {Component} from "react"

class Key extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<td 
				className={this.props.keyType} 
				value={this.props.keyValue}
				onClick={this.props.handlerFunction}
			>
				{ this.props.keyValue }
			</td>
		)
	}
}

export default Key