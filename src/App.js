import "./App.css";

// router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// context
import {ProductContextProvider} from "./context/ProductContextProvider";
import {CartContextProvider} from "./context/CartContextProvider";

// components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/*" element={<Navigate to="/products" />} />
         <Route path="/cart" element={<ShopCart/>}/>
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
