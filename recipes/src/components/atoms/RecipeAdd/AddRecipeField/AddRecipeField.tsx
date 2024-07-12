import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import "./styles.scss";
import Props from "./types";

const AddRecipeField: React.FC<Props> = ({ title, placeholder, value, onChange }) => {
    return (
        <div className="form-field">
            <h5>{title}</h5>
            <SearchBar placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};

export default AddRecipeField;
