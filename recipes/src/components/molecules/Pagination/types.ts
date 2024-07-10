import { UpdatedAPIRecipe } from "../../../API/APIData";

export default interface Props {
    data: UpdatedAPIRecipe[];
    recipesPerPage: number;
    currentPage: number;
    onPageChange: (
        newPage: number,
        indexOfFirst: number,
        indexOfLast: number
    ) => void;
}
