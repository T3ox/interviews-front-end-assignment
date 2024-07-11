import axios from "axios";
import { APIRecipe, UpdatedAPIRecipe } from "./APIData";

const fetchData = async (url: string) => {
    const response = await axios.get(url, {
        headers: { "Cache-Control": "no-cache" },
    });
    return response.data;
};

const getRecipes = async (): Promise<UpdatedAPIRecipe[]> => {
    try {
        const [recipes, cuisines, diets, difficulties] = await Promise.all([
            fetchData("http://localhost:8080/recipes"),
            fetchData("http://localhost:8080/cuisines"),
            fetchData("http://localhost:8080/diets"),
            fetchData("http://localhost:8080/difficulties"),
        ]);

        const createMap = (items: { id: string; name: string }[]) =>
            items.reduce((acc, item) => {
                acc[item.id] = item.name;
                return acc;
            }, {} as Record<string, string>);

        const cuisineMap = createMap(cuisines);
        const dietMap = createMap(diets);
        const difficultyMap = createMap(difficulties);

        // Update the recipes with the names
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
