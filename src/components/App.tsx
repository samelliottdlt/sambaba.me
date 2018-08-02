import * as React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Information from './Information';

const PixelArt = Loadable({
  loader: () => import('./pixel-art'),
  loading: () => <div>Loading...</div>
});

export class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
         <Route exact path='/' component={Information}/>
         <Route path='/pixelart' component={PixelArt} />
        </>
      </Router>
    );
  }
}
