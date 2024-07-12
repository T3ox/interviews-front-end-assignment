import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./styles.scss";
import Props from "./types";

const AddRecipeIngredients: React.FC<Props> = ({ title, mainIngredients, onChange }) => {
    const handleInputChange = (index: number, value: string) => {
        onChange(index, value);
    };

    return (
        <div className="form-field">
            <div className="recipe-details">
                <div className="ingredients-header d-flex align-items-center">
                    <h4>{title}</h4>
                </div>
                <div className="ingredients-container d-flex justify-content-around flex-wrap">
                    {mainIngredients.map((ingredient, index) => (
                        <SearchBar
                            placeholder={`Ingredient ${index + 1}`}
                            key={index}
                            value={ingredient}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    ))}
                </div>
            </div>

            <div className="categories-attributes">drop down menu</div>
        </div>
    );
};

export default AddRecipeIngredients;
