import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';

import DraggableColorList from './DraggableColorList';
import useStyles from './styles/NewPaletteFormStyles';

const NewPaletteForm = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState('teal');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [newColorName, setNewColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const addNewColor = () => {
    setColors([...colors, { color: currentColor, name: newColorName }]);
    setNewColorName('');
  };

  const handleChangeColorName = e => {
    setNewColorName(e.target.value);
  };

  const handleChangePaletteName = e => {
    setNewPaletteName(e.target.value);
  };

  const removeColor = colorName => () => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColors([]);
  };

  const handleSubmit = () => {
    const newPalette = {
      colors,
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-')
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={newPaletteName}
              onChange={handleChangePaletteName}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter a palette name',
                'Palette name already used'
              ]}
            />
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={handleChangeColorName}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Color name must be unique',
              'Color already used'
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ backgroundColor: currentColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
