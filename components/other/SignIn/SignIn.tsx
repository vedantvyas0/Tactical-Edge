"use client";
// SignInForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/UI/Input/Input";
import Styles from "./SignIn.module.css";
import SubmitButton from "@/components/UI/SubmitButton/SubmitButton";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid email"),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" }),
    rememberme: z.boolean(),
});

interface FormData {
    email: string;
    password: string;
    rememberme: boolean;
}

const SignInForm: React.FC = () => {
    const {
        control,
        handleSubmit,
        setValue,
        register,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onSubmit",
        resolver: zodResolver(schema),
    });

    const router = useRouter();

    const onSubmit: SubmitHandler<FormData> = async data => {
        console.log(data);

        // Add your logic for form submission
        try {
            const response = await axios.post(
                `http://3.17.6.121/api/auth/login`,
                data
            );
            if (response.status === 200) {
                console.log("Login successful:", response.data);
                localStorage.setItem("token", response.data.token);
                router.push("/MovieList");
                // Handle successful login, e.g., redirect or update state
            } else {
                console.log("Login failed:", response.data);
                toast.error(`Login failed. ${response.data.message}`);

                // Handle unsuccessful login, e.g., display an error message to the user
            }
        } catch (error) {
            console.log("Login failed:");
            toast.error(`Login failed`);
            // Handle login error, e.g., display an error message to the user
        }
    };

    return (
        <>
            <div className="container mx-auto my-auto ">
                <div className={Styles.signInForm}>
                    <h1 className={`${Styles.signIn} my-5`}>Sign in</h1>
                    <ToastContainer
                        toastClassName={Styles.toast}
                        autoClose={5000}
                        hideProgressBar={false}
                    />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={`flex flex-col gap-y-3`}>
                            <Input
                                placeholder="Email"
                                control={control}
                                setValue={setValue}
                                name="email"
                            />

                            {
                                <span className={Styles.errorMsg}>
                                    {errors.email?.message}
                                </span>
                            }

                            <Input
                                placeholder="Password"
                                control={control}
                                setValue={setValue}
                                name="password"
                            />

                            {
                                <span className={Styles.errorMsg}>
                                    {errors.password?.message}
                                </span>
                            }
                            <label className={Styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    {...register("rememberme")}
                                    className={Styles.checkbox}
                                />
                                Remember me
                            </label>
                            <SubmitButton
                                title="Login"
                                onClick={() => handleSubmit(onSubmit)()}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignInForm;
