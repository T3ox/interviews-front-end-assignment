import React, { useCallback, useEffect, useState } from "react";
import { UpdatedAPIRecipe } from "../../../API/APIData.js";
import getRecipes from "../../../API/getRecipes";
import Pagination from "../../molecules/Pagination/Pagination";
import RecipeCard from "../../molecules/RecipeCard/RecipeCard";

const RecipesList = () => {
    const recipesPerPage: number = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [recipes, setRecipes] = useState<UpdatedAPIRecipe[]>();
    const [filteredRecipes, setFilteredRecipes] = useState<UpdatedAPIRecipe[]>();

    const onPageChange = useCallback(
        (newPage: number, indexOfFirst: number, indexOfLast: number) => {
            setCurrentPage(newPage);
            setFilteredRecipes(recipes?.slice(indexOfFirst, indexOfLast));
        },
        [recipes]
    );

    useEffect(() => {
        const getData = async () => {
            const data: UpdatedAPIRecipe[] = await getRecipes();
            setRecipes(data);
            setFilteredRecipes(data?.slice(0, recipesPerPage));
        };

        getData();
    }, []);

    if (filteredRecipes) {
        return (
            <div>
                <h1>Recipe List</h1>
                <RecipeCard array={filteredRecipes} />
                <Pagination
                    data={recipes!}
                    recipesPerPage={recipesPerPage}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            </div>
        );
    } else {
        <h2>...loading</h2>;
    }
};

export default RecipesList;
