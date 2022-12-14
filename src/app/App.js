import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Sub Outlets (Outlet mean sub children of Layout)
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
// import NotFound from "../pages/NotFound";

function App() {
    return (
    
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="signup" element={<User/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="product" element={<Products/>}/>
            <Route path="cart" element={<Cart/>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    
    );
}

export default App;