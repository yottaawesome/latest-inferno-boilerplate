import '@babel/polyfill';
import { Component, render } from 'inferno';

class App extends Component {
	constructor(props) {
		super(props) 
	}

	render() {
		return <div>Hello, world!</div>
	}
}

render(
  <App />,
  document.getElementById("app")
);
