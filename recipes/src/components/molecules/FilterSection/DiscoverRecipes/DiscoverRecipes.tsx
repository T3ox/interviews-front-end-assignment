import React from "react";
import CustomButton from "../../../atoms/Button/CustomButton";
import SearchDiscover from "../../../molecules/SearchDiscover/SearchDiscover";
import "./styles.scss";
import Props from "./types";

const DiscoverRecipes: React.FC<Props> = ({ titles, placeholders }) => {
    return (
        <div className="discover-recipes d-flex flex-column align-items-center">
            <h2 className="align-self-start">Discover recipes</h2>
            {titles.map((filter, index) => (
                <SearchDiscover key={index} title={filter} placeholder={placeholders[index]} />
            ))}
            <CustomButton text="Search" handle={() => {}} disabled={false} />
        </div>
    );
};

export default DiscoverRecipes;
