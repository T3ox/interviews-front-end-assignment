import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdatedAPIRecipe } from "../../../API/APIData";
import getRecipes from "../../../API/getRecipes";
import CustomButton from "../../atoms/Button/CustomButton";
import TagContainer from "../../molecules/TagContainer/TagContaier";
import "./styles.scss";

const RecipeCard = () => {
    const [recipes, setRecipes] = useState<UpdatedAPIRecipe[]>();
    const navigate = useNavigate();

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

    const openDetail = (recipe: UpdatedAPIRecipe) => {
        navigate("/detail", { state: { recipe } });
    };

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
                    <div className="details-container d-flex align-items-center">
                        <CustomButton
                            text="Details"
                            handle={() => openDetail(recipe)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeCard;
