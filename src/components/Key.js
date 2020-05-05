import React from "react"

const Key = props => {
	return(
		<td 
			className={props.keyType}
			onClick={props.handlerFunction}
		>
			{ props.keyValue }
		</td>
	)
}

export default Key