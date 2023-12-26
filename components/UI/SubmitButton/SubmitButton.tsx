import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
    title: string;
}
export default function SubmitButton({ title }: SubmitButtonProps) {
    return (
        <>
            <button className={styles.submitBtn}>{title}</button>
        </>
    );
}
