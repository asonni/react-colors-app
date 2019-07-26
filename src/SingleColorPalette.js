import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

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
    const {
      classes,
      palette: { paletteName, emoji, id }
    } = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar showingAllColors={false} handleChange={this.handleFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
