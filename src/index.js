/* import React from 'react';
import ReactDOM from 'react-dom';

import {Router,browserHistory} from 'react-router'
import routes from './routes'
ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root')); */


/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
