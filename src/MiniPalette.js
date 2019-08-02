import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles/MiniPaletteStyles';

const MiniPalette = props => {
  const classes = useStyles();
  const { id, paletteName, emoji, colors, handleClick, handleDelete } = props;

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const deletePalette = e => {
    e.stopPropagation();
    handleDelete(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default MiniPalette;
