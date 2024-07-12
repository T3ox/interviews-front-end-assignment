import React from "react";
import Checkbox from "../../Checkbox/Checkbox";
import "./styles.scss";
import Props from "./types";

const AddRecipeCategories: React.FC<Props> = ({ options, selectedCategories, onChange }) => {
    const handleCheckboxChange = (category: string) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        onChange(updatedCategories);
    };

    return (
        <div className="option-container d-flex flex-wrap">
            {options.map((item) => (
                <div className="checkbox-container me-5">
                    <Checkbox
                        filterOption={item}
                        selectedCategories={selectedCategories}
                        onChange={() => handleCheckboxChange(item)}
                    />
                </div>
            ))}
        </div>
    );
};

export default AddRecipeCategories;
