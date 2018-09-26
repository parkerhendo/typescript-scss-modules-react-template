import * as React from 'react';
import * as styles from './styles/App.scss';

interface Props {
  title?: string;
}

interface State {
  count: number;
}

export default class App extends React.Component<Props, State> {
  protected static defaultProps = {
    title: "Hello World",
  }

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
    
  public render() {
    const {title} = styles;
    return (
      <h1 
        className={title}
        onClick={this.increment}
      >
        {this.props.title} {this.state.count}
      </h1>
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}
