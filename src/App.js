import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import reducer from './reducers/reducer'
import Counter from './containers/containerCounter';
import { Provider } from 'react-redux';

const initialState = {
  isLoading: false,
  items: [],
  hasError: false
};


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <div className = "App">
          <header className = "App-header">
             <Counter/>
          </header>
       </div>
       </Provider>
    );
 }
}

export default App;
