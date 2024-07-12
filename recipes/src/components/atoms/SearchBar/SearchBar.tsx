import React from "react";
import "./styles.scss";
import Props from "./types";

const SearchBar: React.FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="serach-bar rounded-pill border-0"
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchBar;
