import React, { useEffect, useState } from "react";
import { getLocalOptions } from "../../utils/localStorage";
import Props from "../AddRecipeField/types";
import Checkbox from "../Checkbox/Checkbox";

const AddRecipeIngredients: React.FC<Props> = ({ title }) => {
    const [ingredients, setIngredients] = useState<string[]>(Array(6).fill(""));
    const [options, setOptions] = useState<string[]>([]);

    const addIngredientField = () => {
        setIngredients([...ingredients, ""]);
    };

    const handleInputChanges = (index: number, value: string) => {
        const newIngredients = ingredients.slice();
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    useEffect(() => {
        setOptions(getLocalOptions());
    }, []);

    return (
        <div className="form-field">
            <div className="recipe-details">
                <div className="d-flex">
                    <h4>{title}</h4>
                    <button type="button" onClick={addIngredientField}>
                        +
                    </button>
                </div>
                {ingredients.map((ingredient, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Ingredient ${index + 1}`}
                        value={ingredient}
                        onChange={(e) => handleInputChanges(index, e.target.value)}
                    />
                ))}
            </div>
            
            <div className="categories-attributes">
                drop down menu
                
            </div>
        </div>
    );
};

export default AddRecipeIngredients;
