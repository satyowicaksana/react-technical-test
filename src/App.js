import React from 'react';
import './App.css';
import Home from './containers/Home'
import { Provider } from 'react-redux'
import store from '../src/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
