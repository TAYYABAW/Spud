import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@material-ui/core/CssBaseline";
// const Web3 = require('web3');
// const customProvider = {
//   sendAsync: (payload, cb) => {
//     console.log('you called');
//     console.log(payload);
//     cb(undefined, 100);
//   }
// };
// // @ts-ignore
// const web3 = new Web3(window.web3.customProvider);
// // @ts-ignore
// // await window.ethereum.enable()
// web3.eth.getBlockNumber().then(console.log)
// .then(()=>console.log('done!!'))
ReactDOM.render(
  <React.StrictMode>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
