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
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route
                    path="/*"
                    element={
                        <Layout>
                            <Routes>
                                <Route path="/" element={<RecipesList />} />
                                <Route
                                    path="/detail"
                                    element={<RecipeDetail />}
                                />
                            </Routes>
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
