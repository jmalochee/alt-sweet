import React from "react"

const options = [
	{ name: "triple", value: "3" },
	{ name: "double", value: "2" },
	{ name: "single", value: "1" }
]

const SelectField = props => {
	const optionElements = options.map((item, index) => (
		<option value={item.value} key={index}> {item.name} </option>
	))

	return(
		<select 
			name={props.name} 
			value={props.selectedOption} 
			onChange={props.handlerFunction}
		>
			{optionElements}
		</select>
	)
}

export default SelectField