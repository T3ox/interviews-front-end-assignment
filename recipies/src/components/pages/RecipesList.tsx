import React, { useEffect, useState } from "react";
import APIRecipe from "../../API/APIData";
import getRecipes from "../../API/getRecipes";
import FilterSection from "../organisms/FilterSection/FilterSection";
import "./styles.scss";

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
            <>
                <nav></nav>
                <div className="recipes-list container">
                    <div className="row">
                        <div className="filter-col col-3">
                            <FilterSection />
                        </div>
                        <div className="recipes-col col-9"></div>
                    </div>
                </div>
                {/*<div>
                    <h1>Recipe List</h1>
                    <ul>
                        {recipes.map((recipe) => (
                            <li key={recipe.id}>
                                <h2>{recipe.name}</h2>
                                <p>{recipe.instructions}</p>
                            </li>
                        ))}
                    </ul>
                </div>*/}
            </>
        );
    } else {
        return <h2>...loading</h2>;
    }
};

export default RecipesList;
