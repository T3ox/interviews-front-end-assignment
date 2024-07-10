import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import RecipeDetail from "./components/pages/RecipeDetail";
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
                    <Route path="/" element={<RecipesList />} />
                    <Route path="/detail" element={<RecipeDetail />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
