import React from "react";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import "./styles.scss";
import Props from "./types";

const RecipeFilter: React.FC<Props> = ({ content }) => {
    return (
        <div className="filter-container">
            {content.map((item, itemIndex) => (
                <div className="filter-group" key={itemIndex}>
                    <h2>{item.title}</h2>
                    {item.filters.map((filter, index) => (
                        <Checkbox
                            filterOption={filter}
                            key={index}
                            selectedCategories={[]}
                            onChange={() => {}}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RecipeFilter;
