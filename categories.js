type:
	range (productivity)
	
	number (caffeine, hours of sleep)
	true/false (traffic, fight w/partner, exercise)
	text (misc.)
	
var caffeine = {
	key: "caffeine",
	title: "Caffeine",
	categ-icon: "local_cafe",
	icon: "local_cafe"
	type: "number",
	quant: "beverages"
};

var sleep = {
	key: "sleep",
	title: "Sleep",
	categ-icon: "bedtime",
	icon: null,
	type: "number",
	quant: "hours"
};

var water = {
	key: "water",
	title: "Water",
	categ-icon: "local_drink",
	icon: "local_drink"
	type: "number",
	quant: "cups"
}

var mood = {
	key: "water",
	title: "Water",
	categ-icon: "local_drink",
	icon: "local_drink"
	type: "select",
	options: [
		"sentiment_very_dissatisfied",
		"sentiment_dissatisfied",
		"sentiment_satisfied",
		"mood",
		"sentiment_very_satisfied"
	],
	quant: [
		"awful",
		"poor",
		"okay",
		"good",
		"great"
	]
}
