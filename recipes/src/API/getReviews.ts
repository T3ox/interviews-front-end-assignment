import axios from "axios";
import { APIReviews } from "./APIData";

const getReviews = async (): Promise<APIReviews[]> => {
    try {
        const reviews = await axios.get("http://localhost:8080/comments");

        return reviews.data;
    } catch (err) {
        console.error("Error fetching recipes:", err);
        return [];
    }
};

export default getReviews;
