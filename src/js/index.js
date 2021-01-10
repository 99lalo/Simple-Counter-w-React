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
import { Timer } from "./component/timer.js";
let flag = 0;
let timer = 100000000;
let secondsElapsed = 0;
const increasing = (flag, goal) => {
	if (flag == 0 && secondsElapsed != goal) {
		secondsElapsed++;
	} else if (secondsElapsed == goal) {
		alert("Goal was reached! Please restart to keep counting!");
		flag = 1;
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
	flag = 0;
	secondsElapsed = 0;
	timer = 100000000;
};
const setTimer = seconds => {
	timer = seconds;
	secondsElapsed = 0;
	return timer;
};
const counter = () => {
	const six = Math.floor(secondsElapsed / 100000);
	const five = Math.floor(secondsElapsed / 10000);
	const four = Math.floor(secondsElapsed / 1000);
	const three = Math.floor(secondsElapsed / 100);
	const two = Math.floor(secondsElapsed / 10);
	const one = Math.floor(secondsElapsed / 1);
	increasing(flag, timer);
	ReactDOM.render(
		<div className="container">
			<Counter
				first={six}
				second={five}
				third={four}
				fourth={three}
				fifth={two}
				sixth={one}
			/>
			<div className="row justify-content-between m-1 bg-light p-2">
				<Stop action={stop} />
				<Resume action={resume} />
				<Reset action={reset} />
			</div>
			<div className="row bg-dark p-2">
				<Timer action={setTimer} />
			</div>
		</div>,
		document.querySelector("#app")
	);
};
//render your react application
var counting = setInterval(counter, 1000);
