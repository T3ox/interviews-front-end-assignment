import React from "react";
import DifficultFilter from "../../molecules/DifficultFilter/DifficultFilter";
import RecipeFilter from "../../molecules/RecipesFilter/RecipeFilter";
import { RFContent } from "../../molecules/RecipesFilter/types";
import DiscoverRecipes from "../DiscoverRecipes/DiscoverRecipes";
import "./styles.scss";

const FilterSection = () => {
    const drTitles = [
        "Search by name",
        "Select category",
        "Select cuisine",
        "Select dietary preference",
    ];
    const drPlaceholders = [
        "Enter reciper name",
        "Choose category",
        "Choose cuisine",
        "Choose preference",
    ];

    const rfContent: RFContent[] = [
        {
            title: "Recipe filters",
            filters: [
                "Vegetarian recipes",
                "Gluten-free options",
                "Low-carb recipes",
                "Vegetarian recipes",
            ],
        },
        {
            title: "Ingredient list",
            filters: [
                "Quick and Easy",
                "Healthy choices",
                "Family friendly",
                "Special Occasions",
            ],
        },
    ];

    const dfDifficulties = ["Easy", "Medium", "Hard", "Expert", "Masterchef"];

    return (
        <section
            className="filter-section"
            style={{ backgroundColor: "greenyellow" }}
        >
            <DiscoverRecipes titles={drTitles} placeholders={drPlaceholders} />
            <RecipeFilter content={rfContent} />
            <DifficultFilter difficulties={dfDifficulties} />
        </section>
    );
};

export default FilterSection;
