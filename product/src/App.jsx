import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";
import "./index.scss";

const App = () => (
  <>
  <Routes>
   <Route path="/" element={<ProductLists />}/> 
   <Route path="/:productId" element={<ProductPage />}/> 
 </Routes>
 </>
);

export default App;
