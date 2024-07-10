import React from "react";
import { useLocation } from "react-router-dom";
import { UpdatedAPIRecipe } from "../../API/APIData";
import DetailContainer from "../organisms/DetailContainer/DetailContainer";
import "./styles.scss";

const RecipeDetail = () => {
    const location = useLocation();
    const recipe = location.state?.recipe as UpdatedAPIRecipe;

    if (!recipe) {
        return <div>Nessuna ricetta trovata</div>;
    }

    return (
        <>
            <DetailContainer recipe={recipe} />
        </>
    );
};

export default RecipeDetail;
