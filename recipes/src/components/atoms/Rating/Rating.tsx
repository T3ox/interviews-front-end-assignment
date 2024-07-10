import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Props from "./types";
import "./styles.scss"

const Rating: React.FC<Props> = ({ rating }) => {
    return (
        <div className="stars-container">
            {Array.from({ length: 5 }, (_, index: number) => {
                if (+rating === undefined) {
                    return <BsStar key={index} />;
                } else if (+rating >= index + 1) {
                    return <BsStarFill key={index} />;
                } else if (+rating >= index + 0.5) {
                    return <BsStarHalf key={index} />;
                } else {
                    return <BsStar key={index} />;
                }
            })}
        </div>
    );
};

export default Rating;
