import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Error404 from "../../pages/404/Error404"
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/user/:id"  element ={<Dashboard />} />
          <Route path='*' element ={<Error404 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;