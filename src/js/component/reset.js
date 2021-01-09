import React from "react";
import PropType from "prop-types";

export const Reset = props => {
	return (
		<button
			className="btn btn-dark"
			style={{ fontSize: "3em", width: "6em" }}
			onClick={props.action}>
			Reset
		</button>
	);
};
Reset.propTypes = {
	action: PropType.func
};
