import axios from "axios";
import { setLocalOptions } from "../components/utils/localStorage";
import { APIRecipe, UpdatedAPIRecipe } from "./APIData";

const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/recipes", {
        headers: { "Cache-Control": "no-cache" },
    });
    return response.data;
};

const fetchCuisines = async () => {
    const response = await axios.get("http://localhost:8080/cuisines", {
        headers: { "Cache-Control": "no-cache" },
    });
    return response.data;
};
const fetchDiets = async () => {
    const response = await axios.get("http://localhost:8080/diets", {
        headers: { "Cache-Control": "no-cache" },
    });
    return response.data;
};
const fetchDifficulties = async () => {
    const response = await axios.get("http://localhost:8080/difficulties", {
        headers: { "Cache-Control": "no-cache" },
    });
    return response.data;
};

const getRecipes = async (): Promise<UpdatedAPIRecipe[]> => {
    try {
        const [recipes, cuisines, diets, difficulties] = await Promise.all([
            fetchData(),
            fetchCuisines(),
            fetchDiets(),
            fetchDifficulties(),
        ]);

        const cuisineNames = cuisines.map((cuisine: { id: string; name: string }) => cuisine.name);
        const dietNames = diets.map((diet: { id: string; name: string }) => diet.name);
        const difficultyNames = difficulties.map((difficulty: { id: string; name: string }) => difficulty.name);
        setLocalOptions([cuisineNames, dietNames, difficultyNames]);

        const createMap = (items: { id: string; name: string }[]) =>
            items.reduce((acc, item) => {
                acc[item.id] = item.name;
                return acc;
            }, {} as Record<string, string>);

        const cuisineMap = createMap(cuisines);
        const dietMap = createMap(diets);
        const difficultyMap = createMap(difficulties);

        const updatedRecipes: UpdatedAPIRecipe[] = recipes.map((recipe: APIRecipe) => ({
            ...recipe,
            cuisineName: cuisineMap[recipe.cuisineId],
            dietName: dietMap[recipe.dietId],
            difficultyName: difficultyMap[recipe.difficultyId],
        }));

        return updatedRecipes;
    } catch (err) {
        console.error("Error fetching recipes:", err);
        return [];
    }
};

export default getRecipes;
