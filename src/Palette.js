import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

import './Palette.css';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  PaletteFooter: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem'
  }
};

class Palette extends Component {
  state = { level: 500, format: 'hex' };

  changeLevel = level => {
    this.setState({ level });
  };

  handleFormat = format => {
    this.setState({ format });
  };

  render() {
    const {
      classes,
      palette: { colors, paletteName, emoji, id }
    } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          showingAllColors
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.handleFormat}
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
