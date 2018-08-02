import React from 'react';
import { Group } from 'react-konva';

import { Cell } from './Cell';

interface ColorGridProps {
  cellSize: number;
  selectedColor: string;
  width: number;
  height: number;
}

const defaultColors = {
  alternate: 'white',
  primary: 'lightgrey'
};

export class ColorGrid extends React.Component<ColorGridProps> {
  public render() {
    const {cellSize, selectedColor, width, height} = this.props;
    const amountOfColumns = Math.ceil(width / cellSize);
    const amountOfRows = Math.ceil(height / cellSize);
    const grid = Array.from(Array(amountOfRows).keys())
      .map(() => Array.from(Array(amountOfColumns).keys()));
    return (
      <Group>
        {grid.map((row, rowIndex) =>
          row.map((colIndex) => (
            <Cell
              key={`${rowIndex}${colIndex}`}
              cellSize={cellSize}
              rowIndex={rowIndex}
              colIndex={colIndex}
              initialColor={
                colIndex % 2 === 0 ?
                  (rowIndex % 2 === 0 ? defaultColors.alternate : defaultColors.primary)
                  : rowIndex % 2 !== 0 ? defaultColors.primary : defaultColors.alternate
              }
              selectedColor={selectedColor}
            />
          ))
        )}
      </Group>
    );
  }
}
