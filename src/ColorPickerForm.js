import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import useStyles from './styles/ColorPickerFormStyles';

const ColorPickerForm = props => {
  const classes = useStyles();
  const { colors, paletteIsFull, addNewColor } = props;
  const [newColorName, setNewColorName] = useState('');
  const [currentColor, setCurrentColor] = useState('teal');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
  });

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const handleChangeColorName = e => {
    setNewColorName(e.target.value);
  };

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    addNewColor(newColor);
    setNewColorName('');
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        className={classes.picker}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColorName}
          name="newColorName"
          variant="filled"
          margin="normal"
          placeholder="Color Name"
          className={classes.colorNameInput}
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
          className={classes.addColor}
          disabled={paletteIsFull}
          style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
