import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Component, render } from 'inferno';
import { HashRouter, Route, Switch, Link } from 'inferno-router';
import HomeRoute from './home-route';
import OtherRoute from './other-route';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div class="main">
        <HashRouter>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/otherroute">Other Route</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={HomeRoute} />
              <Route path="/otherroute" component={OtherRoute} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById("app")
);
