function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

// Creates Splash component
class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.state = {phase : '2'};
	}
	
	componentDidMount() {
		function determinePhase() {
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					// User is signed in.
					return true;

				} else {
					// No user is signed in.
					return false;
				}
			});
		}
		if ( determinePhase() ) {
			this.setState({phase : "3"});
		} else {
			this.setState({phase : "1"});
		}
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
