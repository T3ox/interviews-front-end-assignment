import React, { useEffect, useState } from "react";
import { APIRecipe } from "../../../API/APIData.js";
import getRecipes from "../../../API/getRecipes";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipesList = () => {
    const [recipes, setRecipes] = useState<APIRecipe[]>();

    useEffect(() => {
        const getData = async () => {
            const data: APIRecipe[] = await getRecipes();
            setRecipes(data);
        };

        getData();
    }, []);

    if (!recipes) {
        <h2>...loading</h2>;
    }

    return (
        <div>
            <h1>Recipe List</h1>
            <RecipeCard />
        </div>
    );
};

export default RecipesList;
