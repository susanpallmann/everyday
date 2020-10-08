function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Creates Splash component
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
	}
	
	componentDidMount() {
	}
	
	componentWillUnmount() {
	}
    
  render() {
    return (
      <div>
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
