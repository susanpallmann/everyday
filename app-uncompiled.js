function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function determinePhase() {
	let logged = true;
	console.log(logged);
	return logged;
}

// Creates Splash component
class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.state = {phase: determinePhase()};
	}
	
	componentDidMount() {
	}
	
	componentWillUnmount() {
	}
    
	render() {
		let phase = this.state.phase;
		return (
			<div id="splash">
				<h1>phase</h1>
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<Splash />
			<div>
				<Welcome name="Sara" />
				<Welcome name="Cahal" />
				<Welcome name="Edite" />
			</div>
		</div>
	);
}

$(document).ready(function() {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
