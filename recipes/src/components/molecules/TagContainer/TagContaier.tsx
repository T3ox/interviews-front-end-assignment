import React from "react";
import SingleTag from "../../atoms/SingleTag/SingleTag";
import Props from "./types";

const TagContainer: React.FC<Props> = ({ tags }) => {
    return (
        <>
            {tags.map((tag, index) => (
                <SingleTag tag={tag} key={index} />
            ))}
        </>
    );
};

export default TagContainer;
