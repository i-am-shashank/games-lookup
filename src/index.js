import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
//REDUX SETUP
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
//ROUTING SETUP
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Description from "./pages/Description";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Route exact path="/" component={App} />
      <Route path="/" component={Description} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
