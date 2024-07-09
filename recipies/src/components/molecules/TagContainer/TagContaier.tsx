import React from "react";
import SingleTag from "../../atoms/SingleTag/SingleTag";
import Props from "./types";

const TagContainer: React.FC<Props> = ({ tags }) => {
    return (
        <>
            {tags.map((tag) => (
                <SingleTag tag={tag} />
            ))}
        </>
    );
};

export default TagContainer;
