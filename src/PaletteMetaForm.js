import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';

const PaletteMetaForm = props => {
  const [stage, setStage] = useState('form');
  const [newPaletteName, setNewPaletteName] = useState('');
  const { open, palettes, handleSubmit, hideForm } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const handleChangePaletteName = e => {
    setNewPaletteName(e.target.value);
  };

  const showEmojiPicker = () => {
    setStage('emoji');
  };

  const hideEmojiPicker = () => {
    setStage('form');
  };

  const savePalette = ({ native }) => {
    handleSubmit({ paletteName: newPaletteName, emoji: native });
    setStage();
  };

  const cancelForm = () => {
    hideForm();
    setNewPaletteName('');
  };

  return (
    <>
      <Dialog open={open && stage === 'emoji'} onClose={hideEmojiPicker}>
        <DialogTitle id="form-dialog-title">Choose A Palette Emoji</DialogTitle>
        <Picker
          emoji="point_up"
          title="Pick A Palette Emoji"
          onSelect={savePalette}
        />
      </Dialog>
      <Dialog
        open={open && stage === 'form'}
        onClose={cancelForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. It needs to be
              unique!
            </DialogContentText>
            <TextValidator
              fullWidth
              margin="normal"
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
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelForm} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
};

export default PaletteMetaForm;
