import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Palette.css';

class Palette extends Component {
  state = { level: 500 };

  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
