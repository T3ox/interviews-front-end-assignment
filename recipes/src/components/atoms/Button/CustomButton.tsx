import React from "react";
import "./styles.scss";
import Props from "./types";

const CustomButton: React.FC<Props> = ({ text, handle, disabled }) => {
    return (
        <button
            className="custom-button btn-danger btn rounded-pill rounded "
            onClick={handle}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default CustomButton;
