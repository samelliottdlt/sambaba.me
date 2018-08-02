import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';

import { ColorSelector } from './ColorSelector';
import { ColorGrid } from './Grid';
import { State as Dimensions, WindowResizeListener } from './WindowResizeListener';

export default class App extends Component {
  public state = { selectedColor: 'rgb(34, 34, 34)' };

  public render() {
    const cellSize = 20;
    const { selectedColor } = this.state;

    return (
      <div>
        <ColorSelector
          setSelectedColor={(color) => this.setState({ selectedColor: color })}
        />
        <WindowResizeListener render={
          (dimensions: Dimensions) => (
            <Stage width={dimensions.width} height={dimensions.height}>
              <Layer>
                <ColorGrid
                  cellSize={cellSize}
                  height={dimensions.height}
                  width={dimensions.width}
                  selectedColor={selectedColor}
                />
              </Layer>
            </Stage>
          )
        }>
        </WindowResizeListener>
      </div>
    );
  }
}
