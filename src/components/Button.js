import React from "react"

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