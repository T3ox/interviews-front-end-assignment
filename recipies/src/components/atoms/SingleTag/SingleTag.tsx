import React from "react";
import Props from "./types";
import "./styles.scss"

const SingleTag: React.FC<Props> = ({ tag }) => {
    return <div className="single-tag rounded-pill border">{tag}</div>;
};

export default SingleTag;
