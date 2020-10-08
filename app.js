function Welcome(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Hello, ", props.name);
} // Creates Splash component


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, world!"), /*#__PURE__*/React.createElement("h2", null, "It is ", this.state.date.toLocaleTimeString(), "."));
  }

}

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Welcome, {
    name: "Sara"
  }), /*#__PURE__*/React.createElement(Welcome, {
    name: "Cahal"
  }), /*#__PURE__*/React.createElement(Welcome, {
    name: "Edite"
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
