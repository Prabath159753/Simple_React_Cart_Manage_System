import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Sub Outlets (Outlet mean sub children of Layout)
import Login from "../pages/Login";


function App() {
    return (
    
        <Routes>
            <Route exact path="/" element={<Login/>}/>
        </Routes>
    
    );
}

export default App;