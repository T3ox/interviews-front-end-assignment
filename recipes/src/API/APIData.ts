export interface APIRecipe {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string;
    cuisineId: string;
    dietId: string;
    difficultyId: string;
    image: string;
}

export interface UpdatedAPIRecipe {
    cuisineId: string;
    cuisineName: string;
    dietId: string;
    dietName: string;
    difficultyId: string;
    difficultyName: string;
    id: string;
    image: string;
    ingredients: string[];
    instructions: string;
    name: string;
}

export interface Cuisine {
    id: string;
    name: string;
}

export interface Diet {
    id: string;
    name: string;
}

export interface Difficulty {
    id: string;
    name: string;
}

export interface APIReviews {
    id: string;
    recipeId: string;
    comment: string;
    rating: string;
    date: string;
}
