import React from "react";
import ListDisplayer from "../../molecules/ListDisplayer/ListDisplayer";
import "./styles.scss";
import Props from "./types";

const DetailContainer: React.FC<Props> = ({ recipe }) => {
    return (
        <div className="detail-container container">
            <div className="row justify-content-center">
                <h2 className="mb-4">{recipe.name}</h2>
                <div className="img-container">
                    <img
                        src={`http://localhost:8080${recipe.image}`}
                        alt={recipe.name}
                    />
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
        </div>
    );
};

export default DetailContainer;
