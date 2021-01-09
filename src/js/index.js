//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";
import { array } from "prop-types";
import { Stop } from "./component/stop.js";
import { Resume } from "./component/resume.js";
import { Reset } from "./component/reset.js";
let count = [0, 0, 0, 0, 0, 0];
let flag = 0;
let timer = 0;
let secondsElapsed = 0;
const increasing = (array, flag, goal) => {
	if (flag == 0) {
		if (secondsElapsed == timer && timer != 0) {
			alert("Time its up, time to pay");
			timer = 0;
		}
		if (array[0] > 9) {
			array.forEach((element, index) => {
				array[index] = 0;
			});
			alert("Max Number Reached: Restarting Counter");
		}
		count.forEach((element, index) => {
			if (element >= 9 && array[0] < 10) {
				if (index == 5) {
					array[index] = -1;
				} else if (array[0] != 9) {
					array[index] = 0;
				}
				array[index - 1]++;
			}
		});
		array[array.length - 1] += 1;
		secondsElapsed++;
	}
};
const stop = number => {
	flag = 1;
	return flag;
};
const resume = () => {
	flag = 0;
	return flag;
};
const reset = () => {
	count.forEach((element, index) => {
		count[index] = 0;
	});
};
const setTimer = seconds => {
	timer = seconds;
	secondsElapsed = 0;
	count.forEach((element, index) => {
		count[index] = 0;
	});
	return timer;
};
const counter = () => {
	increasing(count, flag);
	ReactDOM.render(
		<div className="container">
			<Counter
				first={count[0]}
				second={count[1]}
				third={count[2]}
				fourth={count[3]}
				fifth={count[4]}
				sixth={count[5]}
			/>
			<div className="row justify-content-between m-1 bg-light p-2">
				<Stop action={stop} />
				<Resume action={resume} />
				<Reset action={reset} />
			</div>
			<div className="row bg-dark" />
		</div>,
		document.querySelector("#app")
	);
};
//render your react application
var counting = setInterval(counter, 1000);
