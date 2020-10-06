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
	
	class Day extends React.Component(example = "nothing") {
		render() {
			return r('div', {
				class: example,
				valid: "something", // yes/no
				filled: "something", // yes/no
				mood: "something", // yes/no
			});
		}
	}
	
	
	function multiply(a, b = 1) 
	
	// Renders in DOM
	ReactDOM.render(
	    // Element
	    r(Day("something"), null, null),
	    document.getElementById('calendar')
	);
	
	/*ReactDOM.render(
	    // Element
	    r(Day(null), null, null),
	    document.getElementById('calendar')
	);*/
});
