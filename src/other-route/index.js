import { Component } from 'inferno';
import styles from './styles.module.scss';

export default class OtherRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.root}>Hello from OtherRoute!</div>;
  }
}