console.log("Categories file ready!");
var caffeine = {
	keyword: "caffeine",
	title: "Caffeine",
	categIcon: "local_cafe",
	icon: "local_cafe",
	type: "number",
	quant: "beverages"
};
var sleep = {
	keyword: "sleep",
	title: "Sleep",
	categIcon: "bedtime",
	icon: null,
	type: "number",
	quant: "hours"
};

var water = {
	keyword: "water",
	title: "Water",
	categIcon: "local_drink",
	icon: "local_drink",
	type: "number",
	quant: "cups"
};

var aaaMood = {
	keyword: "aaaMood",
	title: "Mood",
	categIcon: "mood",
	icon: "null",
	type: "select",
	options: [
		"sentiment_very_dissatisfied",
		"sentiment_dissatisfied",
		"sentiment_satisfied",
		"mood",
		"sentiment_very_satisfied"
	],
	quant: ""
	]
};

var categories = [
	caffeine,
	sleep,
	water,
	aaaMood
];
