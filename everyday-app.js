$(document).ready(function() {
	
	/* Shorthand notation to make life easier */
	const r = React.createElement;
	
	/* Just for my reference for now:
	
	class Hello extends React.Component {
  		render() {
    		return <div>Hello {this.props.toWhat}</div>;
  		}
	}

	ReactDOM.render(
  		<Hello toWhat="World" />,
  		document.getElementById('root')
	);

	*/
	
	class Hello extends React.Component {
		render() {
			return r('h1', null, `Hello ${this.props.toWhat}`);
		}
	}

	ReactDOM.render(
	    r(Hello, {toWhat: 'World'}, null),
	    document.getElementById('app')
	);
	
	class Day extends React.Component {
		render() {
			return r('div', {
				class: this.props.class,
				valid: this.props.valid,
				filled: this.props.filled,
				mood: this.props.mood,
			});
		}
	}
	
	var dayArray = [
		{
			valid: "false",
			filled: "false",
			mood: null
		},
		{
			valid: "true",
			filled: "true",
			mood: 5
		},
		{
			valid: "true",
			filled: "false",
			mood: null
		},
		{
			valid: "true",
			filled: "true",
			mood: 3
		}
	];
	
	var dayElements = dayArray.map(day => r(Day, {
			class: "day",
			valid: day['valid'],
			filled: day['filled'],
			mood: day['mood']
		}));


	ReactDOM.render(
		r("div", null, dayElements),
		document.getElementById('calendar')
	);
	
	/*ReactDOM.render(
	    // Element
	    r(Day(null), null, null),
	    document.getElementById('calendar')
	);*/
	
	
	
	// Observes to determine if user is logged in or not.
	firebase.auth().onAuthStateChanged(function(user) {
 		if (user) {
    		// User is signed in.
			console.log("test");
  		} else {
    		// No user is signed in.
			console.log("test2");
  		}
	});
	
});
/* Magic Comment | */
