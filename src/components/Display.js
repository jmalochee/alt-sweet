import React from "react"

const Display = props => {
	return(
		<div id="Display" >
			{props.value || 0}
		</div>
	)
}

export default Display