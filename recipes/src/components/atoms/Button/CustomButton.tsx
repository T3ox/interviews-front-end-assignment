import React from "react";
import "./styles.scss";
import Props from "./types";

const CustomButton: React.FC<Props> = ({ text, handle }) => {
    return (
        <button
            className="custom-button btn-danger btn rounded-pill rounded "
            onClick={handle}
        >
            {text}
        </button>
    );
};

export default CustomButton;
