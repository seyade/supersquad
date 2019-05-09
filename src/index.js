import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);

console.log('GET STATE', store.getState());
store.subscribe(() => console.log('STORE', store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
