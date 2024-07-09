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

    if (recipes) {
        return (
            <div>
                <h1>Recipe List</h1>
                <RecipeCard />

                <div style={{ width: "100vw", backgroundColor: "yellow" }}>
                    godo
                </div>

                <ul>
                    {recipes.map((recipe) => (
                        <li key={recipe.id}>
                            <h2>{recipe.name}</h2>
                            <p>{recipe.instructions}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <h2>...loading</h2>;
    }
};

export default RecipesList;
