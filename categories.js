console.log("Categories file ready!");
var caffeine = {
	keyword: "caffeine",
	title: "Caffeine",
	categIcon: "local_cafe",
	icon: "local_cafe",
	type: "icon-number",
	quant: "beverage",
	quants: "beverages",
	min: 0,
	max: 20
};

var alcohol = {
	keyword: "alcohol",
	title: "Alcohol",
	categIcon: "local_bar",
	icon: "local_bar",
	type: "icon-number",
	quant: "drink",
	quants: "drinks",
	min: 0,
	max: 20
};

var exercise = {
	keyword: "exercise",
	title: "Exercise",
	categIcon: "directions_run",
	icon: "directions_run",
	type: "true-false",
	quant: "",
	quants: "",
	min: null,
	max: null
};

var sleep = {
	keyword: "sleep",
	title: "Sleep",
	categIcon: "bedtime",
	icon: "bedtime",
	type: "number",
	quant: "hour",
	quants: "hours",
	min: 0,
	max: 24
};

var water = {
	keyword: "water",
	title: "Water",
	categIcon: "local_drink",
	icon: "local_drink",
	type: "icon-number",
	quant: "cup",
	quants: "cups",
	min: 0,
	max: 20
};

var aaaMood = {
	keyword: "aaaMood",
	title: "Mood",
	categIcon: "mood",
	icon: "null",
	type: "mood",
	options: [
		"sentiment_very_dissatisfied",
		"mood_bad",
		"sentiment_dissatisfied",
		"sentiment_satisfied",
		"mood",
		"sentiment_very_satisfied"
	],
	optionsText: [
		"awful",
		"bad",
		"poor",
		"okay",
		"good",
		"great"
	],
	quant: "",
	quants: "",
	min: null,
	max: null
};

var categories = [
	caffeine,
	sleep,
	water,
	aaaMood
];
