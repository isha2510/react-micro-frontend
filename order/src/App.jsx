import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Route, Routes } from "react-router-dom";
import Orders from "./Components/Orders";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <div className="border-4  border-green-700">
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path=":productId/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
export default App;
