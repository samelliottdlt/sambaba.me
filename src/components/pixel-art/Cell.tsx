import React, { Component } from 'react';
import { Rect } from 'react-konva';

export class Cell extends Component<{
  cellSize: number;
  rowIndex: number;
  colIndex: number;
  initialColor: string;
  selectedColor: string;
}, {
  currentColor: string;
}> {
  public state = {
    currentColor: ''
  };

  public updateCell() {
    const { selectedColor } = this.props;
    this.setState({currentColor: selectedColor});
  }

  public componentDidMount() {
    this.setState({currentColor: this.props.initialColor});
  }

  public render() {
    const { cellSize, rowIndex, colIndex } = this.props;
    const {currentColor} = this.state;
    return (
      <Rect
        x={colIndex * cellSize}
        y={rowIndex * cellSize}
        height={cellSize}
        width={cellSize}
        fill={currentColor}
        onClick={() => this.updateCell()}
        onTap={() => this.updateCell()}
        onTouchMove={() => this.updateCell()}
        onMouseOver={(e: any) =>
          (e.evt.buttons === 1 || e.evt.buttons === 3) && this.updateCell()}
      />
    );
  }
}
