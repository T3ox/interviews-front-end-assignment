import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./styles.scss";
import Props from "./types";

const AddRecipeField: React.FC<Props> = ({ title, placeholder }) => {
    return (
        <div className="form-field">
            <h5>{title}</h5>
            <SearchBar placeholder={placeholder} />
        </div>
    );
};

export default AddRecipeField;
