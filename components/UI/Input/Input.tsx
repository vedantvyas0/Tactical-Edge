// Input.tsx
import React from "react";
import {
    UseFormSetValue,
    FieldValues,
    FieldPath,
    FieldValuesFromControl,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import styles from "./Input.module.css";

interface InputProps {
    placeholder: string;
    control: FieldValuesFromControl<any>; // Control object from RHF
    setValue?: UseFormSetValue<any>; // setValue function from RHF
    name: FieldPath<FieldValues>;
    value?: string;
    defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    control,
    setValue,
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
                        {...field} // Includes onChange, onBlur, value, etc.
                        onChange={e => {
                            setValue && setValue(name, e.target.value); // Update RHF form state
                            field.onChange(e); // Trigger RHF's onChange
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
