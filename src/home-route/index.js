import { Component } from 'inferno';
import styles from './styles.module.scss';

export default class HomeRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.root}>Hello from HomeRoute!</div>;
  }
}