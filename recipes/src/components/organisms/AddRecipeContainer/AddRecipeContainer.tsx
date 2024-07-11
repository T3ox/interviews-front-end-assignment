import React, { useEffect, useState } from "react";
import AddRecipeCategories from "../../atoms/AddRecipeCategories/AddRecipeCategories";
import AddRecipeField from "../../atoms/AddRecipeField/AddRecipeField";
import AddRecipeImage from "../../atoms/AddRecipeImage/AddRecipeIngredients";
import AddRecipeIngredients from "../../atoms/AddRecipeIngredients/AddRecipeIngredients";
import { getLocalOptions } from "../../utils/localStorage";
import "./styles.scss";
const AddRecipeContainer = () => {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        setOptions(getLocalOptions());
    }, []);

    return (
        <div className="add-recipe-container container">
            <form className="recipe-form">
                <div className="recipe-detail">
                    <h3>Recipe Details</h3>
                    <AddRecipeField title="Recipe Title" placeholder="Recipe Name" />
                    <AddRecipeField title="Description" placeholder="Add a brief description" />
                    <AddRecipeIngredients title="Main ingredients" placeholder={""} />
                </div>

                <div className="recipe-detail my-5">
                    <h3>Image</h3>
                    <AddRecipeImage />
                </div>

                <div className="recipe-detail my-5">
                    <h3>Categories & Attributes</h3>
                    <AddRecipeCategories options={options} />
                </div>
            </form>
        </div>
    );
};

export default AddRecipeContainer;
