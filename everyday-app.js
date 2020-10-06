$(document).ready(function() {
	
	/* Shorthand notation to make life easier */
	const e = React.createElement;
	
	
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
			return e('h1', null, `Hello ${this.props.toWhat}`);
		}
	}

	ReactDOM.render(
	    e(Hello, {toWhat: 'World'}, null),
	    $('#app')
	);
});
