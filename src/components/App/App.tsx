import * as React from 'react';
import * as styles from './styles/App.scss';

interface Props {
  title: string;
}

export default class App extends React.Component<Props> {
  
  protected static defaultProps = {
    string: "Hello"
  }
  
  public render() {
    return (
      <h1 className={styles.title}>{this.props.title}</h1>
    );
  }
}
