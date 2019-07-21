import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
  state = { format: 'hex' };

  _shades = this.gatherShades(this.props.palette, this.props.colorId);

  handleFormat = format => {
    this.setState({ format });
  };

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
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar showingAllColors={false} handleChange={this.handleFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
