import React from "react";
import Props from "./types";

const DifficultFilter: React.FC<Props> = ({ difficulties }) => {
    return (
        <div>
            {difficulties.map((d, index) => (
                <button
                    className="btn btn-outline-secondary rounded-pill"
                    key={index}
                >
                    {d}
                </button>
            ))}
        </div>
    );
};

export default DifficultFilter;
