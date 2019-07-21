import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  _shades = this.gatherShades(this.props.palette, this.props.colorId);

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    const allColors = palette.colors;
    Object.keys(allColors).forEach(key => {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    });
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    console.log(colorBoxes);
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
