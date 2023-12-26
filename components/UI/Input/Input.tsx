import { FC } from "react";
import styles from "./Input.module.css";

interface InputProps {
    placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
    return (
        <>
            <input className={styles.input} placeholder={placeholder} />
        </>
    );
}
