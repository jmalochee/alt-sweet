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

	const includeAmt = () => {if(props.end === "from") {
		return props.amt.qty + props.amt.unit
	}}

	return(
		<div className="display" id={props.id} >
			{feedDisplay} {includeAmt()}
		</div>
	)
}

export default Display