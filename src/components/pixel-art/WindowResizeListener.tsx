import {Component} from 'react';

import {fromEvent} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

export interface State {
  height: number;
  width: number;
}

interface RenderProp {
  render: (param: State) => JSX.Element;
}

export class WindowResizeListener extends Component<RenderProp, State> {
  public state = {
    height: window.innerHeight,
    width: window.innerWidth
  };

  public componentDidMount() {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(100),
        filter(
          (event) =>
          event.target !== null && (
            this.state.height < (event.target as Window).innerHeight ||
            this.state.width < (event.target as Window).innerWidth
          )
        )
      )
      .subscribe((event) =>
        event.target !== null && (
          this.setState({
            height: Math.max(this.state.height, (event.target as Window).innerHeight),
            width: Math.max(this.state.width, (event.target as Window).innerWidth)
          })
        )
      );
  }

  public render() {
    return this.props.render(this.state);
  }
}
