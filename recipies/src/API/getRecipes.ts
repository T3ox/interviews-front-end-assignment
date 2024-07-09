import axios from "axios";
import APIRecipe from "./APIData";

const getRecipes = async (): Promise<APIRecipe[]> => {
    try {
        const response = await axios.get("http://localhost:8080/recipes", {
            headers: {
                "Cache-Control": "no-cache",
            },
        });
        //console.log(response);
        return response.data;
    } catch (err) {
        console.error("Error fetching recipes:", err);
        return [];
    }
};

export default getRecipes;
