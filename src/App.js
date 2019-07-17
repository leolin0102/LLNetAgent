import React from 'react';
import './App.css';
import SideNav from './nav/list'
import store from './Store'
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App-container">
          <SideNav/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
