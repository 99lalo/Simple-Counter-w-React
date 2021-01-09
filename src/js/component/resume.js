import React from "react";
import PropType from "prop-types";

export const Resume = props => {
	return (
		<button
			className="btn btn-dark"
			style={{ fontSize: "3em", width: "6em" }}
			onClick={props.action}>
			Resume
		</button>
	);
};
Resume.propTypes = {
	action: PropType.func
};
