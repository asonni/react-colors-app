import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import useStyles from './styles/PaletteStyles';

const SingleColorPalette = props => {
  const classes = useStyles();
  const [format, setFormat] = useState('hex');
  const {
    palette: { paletteName, emoji, id }
  } = props;

  const handleFormat = newFormat => {
    setFormat(newFormat);
  };

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    const allColors = palette.colors;
    Object.keys(allColors).forEach(key => {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    });
    return shades.slice(1);
  };

  const _shades = gatherShades(props.palette, props.colorId);

  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar showingAllColors={false} handleChange={handleFormat} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default SingleColorPalette;
