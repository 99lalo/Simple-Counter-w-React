import React from "react";
import PropType from "prop-types";
import { useState } from "react";

export const Timer = props => {
	const [input, setInput] = useState("");
	const startTimer = () => {
		props.action(input);
	};
	return (
		<div>
			<span className="text-light">Timer</span>
			<div className="input-group mb-3">
				<input
					type="number"
					className="form-control"
					placeholder="Please input the amount of seconds"
					aria-label="set timer"
					aria-describedby="basic-addon2"
					max="999999"
					style={{ width: "20em" }}
					value={input}
					onChange={event => setInput(event.target.value)}
				/>
				<div className="input-group-append">
					<button
						className="btn bg-secondary text-light"
						type="button"
						onClick={startTimer}>
						Start Timer
					</button>
				</div>
			</div>
		</div>
	);
};
Timer.propTypes = {
	action: PropType.func
};
