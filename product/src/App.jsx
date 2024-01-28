import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <>
  <Routes>
   <Route path="/" element={<ProductLists />}/> 
   <Route path="/:productId" element={<ProductPage />}/> 
 </Routes>
 </>
);

export default App;
