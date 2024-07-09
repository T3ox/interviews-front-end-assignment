export default interface APIRecipe {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string;
    cuisineId: string;
    dietId: string;
    difficultyId: string;
    image: string;
}
