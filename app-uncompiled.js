function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function determinePhase() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			return {phase: '1'};

		} else {
			// No user is signed in.
			return {phase: '2'};
		}
	});
}

// Creates Splash component
class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.state = {phase : '2'};
	}
	
	componentDidMount() {
		this.setState(determinePhase());
	}
	
	componentWillUnmount() {
	}
    
	render() {
		if (this.state.phase === '1') {
			return (
				<div id="splash">
					<div id="splash-1">
						<h1>{this.state.phase}</h1>
					</div>
				</div>
			);
		} else if (this.state.phase === '2') {
			return (
				<div id="splash">
					<div id="splash-2">
						<h1>{this.state.phase}</h1>
					</div>
				</div>
			);
		} else if (this.state.phase === '3') {
			return (
				<div id="splash">
					<div id="splash-3">
						<h1>{this.state.phase}</h1>
					</div>
				</div>
			);
		}
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
