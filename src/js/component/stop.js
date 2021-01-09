import React from "react";
import PropType from "prop-types";

export const Stop = props => {
	return (
		<button
			className="btn btn-dark"
			style={{ fontSize: "3em", width: "6em" }}
			onClick={props.action}>
			Stop
		</button>
	);
};
Stop.propTypes = {
	action: PropType.func
};
