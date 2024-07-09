import React from "react";
import Props from "./types";

const DifficultFilter: React.FC<Props> = ({ difficulties }) => {
    return (
        <div>
            {difficulties.map((d) => (
                <button className="btn btn-outline-secondary rounded-pill">
                    {d}
                </button>
            ))}
        </div>
    );
};

export default DifficultFilter;
