export default interface Props {
    options: string[];
    selectedCategories: string[];
    onChange: (selectedCategories: string[]) => void;
}
