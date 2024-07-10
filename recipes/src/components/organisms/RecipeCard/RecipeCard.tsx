import React, { useEffect, useState } from "react";
import { UpdatedAPIRecipe } from "../../../API/APIData";
import getRecipes from "../../../API/getRecipes";
import TagContainer from "../../molecules/TagContainer/TagContaier";
import "./styles.scss";

const RecipeCard = () => {
    const [recipes, setRecipes] = useState<UpdatedAPIRecipe[]>();

    useEffect(() => {
        const getData = async () => {
            const data: UpdatedAPIRecipe[] = await getRecipes();
            setRecipes(data);
        };

        getData();
    }, []);

    if (!recipes) {
        return <h2>...loading</h2>;
    }

    console.log(recipes);

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div
                    className="recipe-container d-flex align-items-center my-2"
                    key={recipe.id}
                >
                    <div className="img-container">
                        <img
                            src={`http://localhost:8080${recipe.image}`}
                            alt={recipe.name}
                        />
                    </div>
                    <div className="content-container ">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.cuisineName}</p>
                        <p>{recipe.ingredients.join(", ")}</p>
                        <div className="tag-container d-flex">
                            <TagContainer
                                tags={[recipe.difficultyName, recipe.dietName]}
                            />
                        </div>
                    </div>
                    <div className="details-container">
                        <h3>{recipe.id}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeCard;
