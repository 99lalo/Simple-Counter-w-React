import React, { useState, useEffect } from "react";
import PropType from "prop-types";

export const Counter = props => {
	return (
		<div
			className="container text-light"
			style={{ fontSize: "5em", backgroundColor: "black" }}>
			<div className="row justify-content-center m-1">
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<i
						className="far fa-clock"
						style={{
							padding: "0.3em 0.1em 0.3em 0.1em",
							backgroundColor: "#202020"
						}}
					/>
				</div>
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<span
						style={{
							padding: "0.1em 0.1em 0.2em 0.1em",
							backgroundColor: "#202020"
						}}>
						{props.first % 10}
					</span>
				</div>
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<span
						style={{
							padding: "0.1em 0.1em 0.2em 0.1em",
							backgroundColor: "#202020"
						}}>
						{props.second % 10}
					</span>
				</div>
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<span
						style={{
							padding: "0.1em 0.1em 0.2em 0.1em",
							backgroundColor: "#202020"
						}}>
						{props.third % 10}
					</span>
				</div>
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<span
						style={{
							padding: "0.1em 0.1em 0.2em 0.1em",
							backgroundColor: "#202020"
						}}>
						{props.fourth % 10}
					</span>
				</div>
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<span
						style={{
							padding: "0.1em 0.1em 0.2em 0.1em",
							backgroundColor: "#202020"
						}}>
						{props.fifth % 10}
					</span>
				</div>
				<div
					className="bg-dark"
					style={{
						padding: "0 0.1em 0 0.1em",
						margin: "0.1em 0.1em 0.1em 0.1em",
						borderRadius: "10%"
					}}>
					<span
						style={{
							padding: "0.1em 0.1em 0.2em 0.1em",
							backgroundColor: "#202020"
						}}>
						{props.sixth % 10}
					</span>
				</div>
			</div>
		</div>
	);
};
Counter.propTypes = {
	first: PropType.number,
	second: PropType.number,
	third: PropType.number,
	fourth: PropType.number,
	fifth: PropType.number,
	sixth: PropType.number
};
