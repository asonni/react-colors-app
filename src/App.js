import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPaletteForm from './NewPaletteForm';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  findPalette = paletteId =>
    seedColors.find(palette => palette.id === paletteId);

  savePalette = newPalette => {
    console.log(newPalette);
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={() => <NewPaletteForm savePalette={this.savePalette} />}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList {...routeProps} palettes={seedColors} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
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
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
