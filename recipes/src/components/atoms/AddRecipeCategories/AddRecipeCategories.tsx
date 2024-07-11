import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Props from "./types";

const AddRecipeCategories: React.FC<Props> = ({ options }) => {
    return (
        <div className="option-container d-flex flex-wrap">
            {options.map((item) => (
                <Checkbox filterOption={item} />
            ))}
        </div>
    );
};

export default AddRecipeCategories;
