export default interface Props {
    filterOption: string;
    selectedCategories: string[];
    onChange: (selectedCategories: string[]) => void;
}
