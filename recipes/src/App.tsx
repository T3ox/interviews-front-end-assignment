import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import RecipesList from "./components/pages/Recipes";
import Welcome from "./components/pages/Welcome";
import Layout from "./components/utils/Layout/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/" element={<RecipesList />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
