import React from "react"
import Display from "./Display"

const options = [
	{ name: "triple", value: "3" },
	{ name: "double", value: "2" },
	{ name: "single", value: "1" }
]

const ConvertBox = props => {
	const optionElements = options.map((item, index) => (
		<option value={item.value} key={index}> {item.name} </option>
	))

	const whichSweetener = () => {
		if(props.convertSide === "to"){
			return "preferred"
		} else if (props.convertSide === "from"){
			return "original"
		}
	}

	const whichDisplay = () => {
		if(props.convertSide === "from"){
			return (
				<Display
					id={"display-" + props.convertSide}
					amt={noAmt}
					amts={props.amts}
				/>
			)
		} else if(props.convertSide === "to"){
			return (
				<div className="display"/>
			)
		}
	}

	const noAmt = {qty: "", unit: ""}

	return(
		<div className="convert-box" id={props.convertSide}>
			{whichDisplay()}
			<select 
				name={"select-" + props.convertSide} 
				value={props.selectedOption} 
				onChange={props.selectHandlerFunction}
			>
				<option value="" disabled>{whichSweetener()} sweetener</option>
				{optionElements}
			</select>
		</div>
	)
}

export default ConvertBox