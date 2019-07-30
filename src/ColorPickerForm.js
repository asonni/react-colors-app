import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ColorPickerForm = props => {
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
    <>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
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
          disabled={paletteIsFull}
          style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </>
  );
};

export default ColorPickerForm;
