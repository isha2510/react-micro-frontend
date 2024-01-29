import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return <div className="border-4  border-blue-700">
  <Routes>
   <Route path="/" /> 
 </Routes>
 </div>
};

export default App;
