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
});
