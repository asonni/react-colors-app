import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    // save palettes to local storage
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const findPalette = paletteId =>
    palettes.find(palette => palette.id === paletteId);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = id => {
    setPalettes(palettes.filter(palette => palette.id !== id));
  };

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={routeProps => (
          <NewPaletteForm
            {...routeProps}
            palettes={palettes}
            savePalette={savePalette}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList
            {...routeProps}
            palettes={palettes}
            deletePalette={deletePalette}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId"
        render={routeProps => (
          <Palette
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
};

export default App;
