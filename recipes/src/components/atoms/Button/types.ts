export default interface Props {
    text: string;
    handle: (e: React.FormEvent) => void;
    disabled: boolean;
}
