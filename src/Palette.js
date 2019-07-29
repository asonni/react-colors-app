import React, { useState } from 'react';

import useStyles from './styles/PaletteStyles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

const Palette = ({ palette }) => {
  const classes = useStyles();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { colors, paletteName, emoji, id } = palette;

  const changeLevel = level => {
    setLevel(level);
  };

  const handleFormat = format => {
    setFormat(format);
  };

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
        changeLevel={changeLevel}
        handleChange={handleFormat}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default Palette;
