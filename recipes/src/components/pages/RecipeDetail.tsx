import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { APIReviews, UpdatedAPIRecipe } from "../../API/APIData";
import getReviews from "../../API/getReviews";
import Comment from "../atoms/Comment/Comment";
import ListDisplayer from "../atoms/ListDisplayer/ListDisplayer";
import "./styles.scss";

const RecipeDetail = () => {
    const location = useLocation();
    const recipe = location.state?.recipe as UpdatedAPIRecipe;
    const [reviews, setReviews] = useState<APIReviews[]>([]);
    const [allReviews, setAllReviews] = useState<APIReviews[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data: APIReviews[] = await getReviews();
            setAllReviews(data);
        };

        getData();
    }, []);

    useEffect(() => {
        if (allReviews.length > 0 && recipe.id) {
            const filteredComments = allReviews.filter((comment) => comment.recipeId === recipe.id);
            setReviews(filteredComments);
        }
    }, [allReviews, recipe.id]);

    if (!recipe) {
        return <div>Nessuna ricetta trovata</div>;
    }

    return (
        <div className="detail-container container">
            <div className="row justify-content-center">
                <h2 className="mb-4">{recipe.name}</h2>
                <div className="img-container">
                    <img src={`http://localhost:8080${recipe.image}`} alt={recipe.name} />
                </div>
                <ListDisplayer title="Ingredients" array={recipe.ingredients} />
                <ListDisplayer
                    title="Procedure"
                    array={recipe.instructions
                        .split(".")
                        .map((str) => str.trim())
                        .filter((str) => str.length > 0)}
                />
            </div>

            {reviews?.map((review) => (
                <Comment key={review.id} {...review} />
            ))}
        </div>
    );
};

export default RecipeDetail;
