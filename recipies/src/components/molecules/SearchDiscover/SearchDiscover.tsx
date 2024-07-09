import React from "react";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import Props from "./types";
import "./styles.scss"

const SearchDiscover: React.FC<Props> = ({ title, placeholder }) => {
    return (
        <div className="search-discover my-2">
            <h3>{title}</h3>
            <SearchBar placeholder={placeholder} />
        </div>
    );
};

export default SearchDiscover;
