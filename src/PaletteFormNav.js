import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import PaletteMetaFrom from './PaletteMetaForm';
import useStyles from './styles/PaletteFormNavStyles';

const PaletteFormNav = props => {
  const classes = useStyles();
  const [formShowing, setFormShowing] = useState(false);
  const { open, palettes, handleSubmit, handleDrawerOpen } = props;

  const showForm = () => {
    setFormShowing(true);
  };

  const hideForm = () => {
    setFormShowing(false);
  };

  return (
    <div className={classes.root}>
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
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={showForm}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      <PaletteMetaFrom
        open={formShowing}
        palettes={palettes}
        hideForm={hideForm}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default PaletteFormNav;
