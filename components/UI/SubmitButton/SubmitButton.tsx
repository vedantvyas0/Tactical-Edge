// CustomSubmitButton.tsx
import React from "react";
import Styles from "./SubmitButton.module.css";

interface CustomSubmitButtonProps {
    title: string;
    onClick: () => void;
}

const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({
    title,
    onClick,
}) => {
    return (
        <button type="button" onClick={onClick} className={Styles.submitBtn}>
            {title}
        </button>
    );
};

export default CustomSubmitButton;
