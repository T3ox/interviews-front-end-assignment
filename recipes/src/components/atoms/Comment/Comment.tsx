import { format, parseISO } from "date-fns";
import React from "react";
import Rating from "../../atoms/Rating/Rating";
import "./styles.scss";
import Props from "./types";
const defaultPFP =
    require("../../utils/images/GenericProfileImage.png") as string;

const Comment: React.FC<Props> = ({ comment, rating, date }) => {
    const formattedDate: string = format(parseISO(date), "MMMM d, yyyy, HH:mm");

    return (
        <div className="comment-container">
            <div className="user-container d-flex align-items-center">
                <img src={defaultPFP} alt="Author" className="profile-image" />
                <p>Author Name</p>
            </div>
            <Rating rating={rating} />
            <p className="comment-date">{formattedDate}</p>
            <p className="user-comment">{comment}</p>
        </div>
    );
};

export default Comment;
