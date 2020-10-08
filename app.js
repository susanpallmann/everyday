const create = React.createElement;

function Welcome(props) {
	return create("h1", null, "Hello, ", props.name);
}

function App() {
	return create("div", null, create(Welcome, {
		name: "Sara"
	}), create(Welcome, {
		name: "Cahal"
	}), create(Welcome, {
		name: "Edite"
	}));
}

$(document).ready(function() {
	ReactDOM.render( create(App, null), document.getElementById('root'));
});
