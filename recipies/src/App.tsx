import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import RecipesList from "./components/pages/RecipesList";
import Welcome from "./components/pages/Welcome";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/" element={<RecipesList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
