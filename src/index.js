import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode); // Utilisez ReactDOM.createRoot

root.render(<App />);
