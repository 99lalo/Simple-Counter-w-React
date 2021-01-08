import React from "react";

let count = [0, 0, 0, 0, 0, 0];

export function Counter() {
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
						{count[0]}
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
						{count[1]}
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
						{count[2]}
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
						{count[3]}
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
						{count[4]}
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
						{count[5]}
					</span>
				</div>
			</div>
		</div>
	);
}
