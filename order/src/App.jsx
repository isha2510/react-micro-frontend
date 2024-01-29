import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

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
