import React from "react";
import RecipesList from "../molecules/RecipesList/RecipesList";
import FilterSection from "../organisms/FilterSection/FilterSection";
import "./styles.scss";

const Recipes = () => {
    return (
        <>
            <div className="recipes-list container">
                <div className="row">
                    <div className="filter-col col-3">
                        <FilterSection />
                    </div>
                    <div className="recipes-col col-9">
                        <RecipesList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recipes;
