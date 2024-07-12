import React from "react";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import "./styles.scss";
import Props from "./types";

const SearchDiscover: React.FC<Props> = ({ title, placeholder }) => {
    return (
        <div className="search-discover my-2">
            <h3>{title}</h3>
            <SearchBar placeholder={placeholder} value="" onChange={(e) => {}} />
        </div>
    );
};

export default SearchDiscover;
