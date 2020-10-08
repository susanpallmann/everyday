const create = React.createElement;

function Welcome(props) {
	return create("h1", null, "Hello, ", props.name);
}

function App() {
	return create("div", null, /*#__PURE__*/React.createElement(Welcome, {
		name: "Sara"
	}), React.createElement(Welcome, {
		name: "Cahal"
	}), React.createElement(Welcome, {
		name: "Edite"
	}));
}

$(document).ready(function() {
	ReactDOM.render( create(App, null), document.getElementById('root'));
});
