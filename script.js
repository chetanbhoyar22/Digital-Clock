let x;
let hours, mins, secs;
setInterval(() => {
	x = new Date();
	hours = x.getHours();
	mins = x.getMinutes();
	secs = x.getSeconds();
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("mins").innerHTML = mins;
	document.getElementById("secs").innerHTML = secs;
}, 1000);

let y = new Date();
	if (y.getHours() >= 12) {
		document.getElementById("schedule").innerHTML = "PM";
	} else {
		document.getElementById("schedule").innerHTML = "AM";
	}

const setTimer = () => {
	let selectWakeTime = document.getElementById("setWakeTime");
	let optionWake = selectWakeTime.options[selectWakeTime.selectedIndex];

	if (optionWake.value == y.getHours()) {
		document.getElementById("image").src = "./images/wakeup_image.svg";
		document.getElementById("img-text").innerHTML = "Good Morning !!";
	}

	let selectLunchTime = document.getElementById("setLunchTime");
	let optionLunch = selectLunchTime.options[selectLunchTime.selectedIndex];

	if (optionLunch.value == y.getHours()) {
		document.getElementById("image").src = "./images/lunch_image.svg";
		document.getElementById("img-text").innerHTML = "Let's Have Some Lunch !!";
	}

	let selectNapTime = document.getElementById("setNapTime");
	let optionNap = selectNapTime.options[selectNapTime.selectedIndex];

	if (optionNap.value == y.getHours()) {
		document.getElementById("image").src = "./images/goodnight_image.svg";
		document.getElementById("img-text").innerHTML = "Good Night !!";
	}
	
	if (
		optionWake.value == "default" &&
		optionLunch.value == "default" &&
		optionNap.value == "default"
	) {
		alert("✪ Please Set Time First ✪");
	} else {
		document.getElementById("base").style.display = "block";
	}
	
	if (optionWake.value != "default") {
		document.getElementById(
			"wakeupTime"
		).innerHTML = `Wake Up Time : ${optionWake.innerHTML}`;
	}
	if (optionLunch.value != "default") {
		document.getElementById(
			"lunchTime"
		).innerHTML = `Lunch Time : ${optionLunch.innerHTML}`;
	}
	if (optionNap.value != "default") {
		document.getElementById(
			"napTime"
		).innerHTML = `Nap Time : ${optionNap.innerHTML}`;
	}
};