import React from "react";
import Props from "./types";

const ListDisplayer: React.FC<Props> = ({ title, array }) => {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {array.map((element) => (
                    <li className="ingredient-item">
                        <p>{element}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListDisplayer;
