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

    /*const discoverFilter = [
        { title: "Search by name", placeholders: "Enter reciper name" },
        { title: "Select category", placeholders: "Choose category" },
        { title: "Select cuisine", placeholders: "Choose cuisine" },
        {
            title: "Select dietary preference",
            placeholders: "Choose preference",
        },
    ];*/

    const rfTitles = ["Recipe filters", "Ingredients list", "User Reviews"];
    const rfPlaceholders = [
        "vegetarian recipes",
        "gluten-free options",
        "User Reviews",
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
