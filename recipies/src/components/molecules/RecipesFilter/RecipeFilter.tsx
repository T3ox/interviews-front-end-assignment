import React from "react";
import Props from "./types";
import "./styles.scss"

const RecipeFilter: React.FC<Props> = ({ content }) => {
    return (
        <>
            {content.map((item, index) => (
                <>
                    <h2>{content[index].title}</h2>
                    {item.filters.map((item, filtersIndex) => (
                        <div className="filter-option d-flex align-items-center">
                            <input type="checkbox" />
                            <p key={filtersIndex}>{item}</p>
                        </div>
                    ))}
                </>
            ))}
        </>
    );
};

export default RecipeFilter;
