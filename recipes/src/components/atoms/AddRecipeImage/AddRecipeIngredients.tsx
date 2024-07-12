import React, { ChangeEvent } from "react";
import Props from "./types";

const AddRecipeImage: React.FC<Props> = ({ onChange }) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onChange(e.target.files[0]);
        }
    };

    return (
        <div className="form-field">
            <h4>Recipe Image</h4>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};

export default AddRecipeImage;
