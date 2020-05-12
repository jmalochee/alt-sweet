import React from "react"

const unitFormat = {
	cu: "cup",
	tb: "tbsp",
	tsp: "tsp"
}

const Display = props => {

	const feedDisplay = props.amts.map((amt, key) => {
		return(
			<span className="amt" key={key}>
				{amt.scalar.toString() + unitFormat[amt._units] + " "}
			</span>
		)
	})

	return(
		<div id="Display" >
			{feedDisplay} {props.amt.qty + props.amt.unit }
		</div>
	)
}

export default Display