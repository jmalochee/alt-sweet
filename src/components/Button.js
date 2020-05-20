import React from "react"
import "./Button.css"

const Button = props => {
	return(
		<button
			type="button" 
			className={props.btnType}
			value={props.btnValue}
			onClick={props.handlerFunction}
		>
			{props.btnValue}
		</button>
	)
}

export default Button