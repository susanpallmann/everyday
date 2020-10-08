function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function determinePhase() {
	let logged = true;
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
    return (
      <div id="splash">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

$(document).ready(function() {
	ReactDOM.render(
	  <App />,
	  document.getElementById('root')
	);
});
