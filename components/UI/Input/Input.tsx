import React from "react";
import {
    Control,
    UseFormSetValue,
    FieldPath,
    UseFormReset,
    SubmitHandler,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import styles from "./Input.module.css";

interface InputProps {
    placeholder: string;
    control: Control<any>; // Use Control with explicit form data type
    setValue?: UseFormSetValue<any>;
    reset?: UseFormReset<any>; // Add reset with explicit form data type
    name: FieldPath<any>;
    value?: string;
    defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    control,
    setValue,
    reset,
    name,
    defaultValue,
}) => {
    return (
        <div>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <input
                        className={
                            name === "publishingDate"
                                ? `${styles.input} ${styles.inputDate}`
                                : name === "title"
                                ? `${styles.input} ${styles.inputTitle}`
                                : styles.input
                        }
                        {...field}
                        onChange={e => {
                            setValue && setValue(name, e.target.value);
                            field.onChange(e);
                        }}
                        placeholder={placeholder}
                        name={name}
                    />
                )}
            />
        </div>
    );
};

export default Input;
