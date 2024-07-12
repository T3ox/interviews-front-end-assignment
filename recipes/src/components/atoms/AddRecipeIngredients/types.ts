export default interface Props {
    title: string;
    placeholder: string;
    mainIngredients: string[];
    onChange: (index: number, value: string) => void;
}
