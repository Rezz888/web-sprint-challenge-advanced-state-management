import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { smurfReducer } from "./reducer";
import thunk from "redux-thunk";



// Step 1: create the Redux store
const store = createStore(smurfReducer, applyMiddleware(thunk));


const rootElement = document.getElementById("root");


// Step 2: Provide the Redux store to all components
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
