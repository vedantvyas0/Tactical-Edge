"use client";

import React, { useEffect, useRef, useState } from "react";
import Styles from "./EditMovieForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/UI/Input/Input";
import { useRouter } from "next/navigation";
import axios from "axios";

const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

interface EditMovieFormProps {
    defaultValues?: {
        title: string;
        publishing_year: string;
        image?: FileList;
        // ... other fields as needed
    };
}

const schema = z.object({
    title: z
        .string()
        .min(1, { message: "Title is required" })
        .min(3, { message: "Title of minimum 3 letters required" }),

    publishing_year: z
        .string()
        .min(1, { message: "Publishing Date is required" })
        .min(4, { message: "Publishing Date must at least 4 characters" }),
    image: z.any(),
});

interface FormData {
    title: string;
    publishing_year: string;
    image?: FileList;
}

interface EditPageProps {
    params: string;
}

export default function EditMovieForm({
    defaultValues,
    params,
}: EditMovieFormProps & EditPageProps) {
    const {
        control,
        handleSubmit,
        setValue,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues,
    });
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const thumbnailRef = useRef<HTMLImageElement | null>(null);
    const [imageFile, setImageFile] = useState<any>(null);
    const router = useRouter();

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        setImageFile(selectedFile);

        // Update the thumbnail preview
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = e => {
                const result = e.target?.result as string;
                thumbnailRef.current?.setAttribute("src", result);
            };
            reader.readAsDataURL(selectedFile);
        }

        // You can perform additional logic or state updates here
    };

    console.log("ii", imageFile);
    const handleUploadTextClick = () => {
        fileInputRef.current?.click();
    };

    const handleCancel = () => {
        // Your logic to handle cancel button click
        router.push("/MovieList");
    };

    const onSubmit: SubmitHandler<FormData> = async data => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("publishing_year", data.publishing_year);
        if (imageFile) {
            formData.append("image", imageFile);
        }

        // Alternatively, if you want to log the entire FormData object

        try {
            const token = localStorage.getItem("token");
            axios.defaults.headers.put["Authorization"] = token;
            axios.defaults.headers.common["Content-Type"] =
                "multipart/form-data";

            const response = await axios.put(
                `http://3.17.6.121/api/movies/${params}`,
                formData
            );
            const data = await response.data;
            if (response.status === 200) {
                router.push("/MovieList");
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
        }
    };

    useEffect(() => {
        // Set default image file when the component mounts
        if (defaultValues?.image) {
            setImageFile(defaultValues.image[0]);
            console.log("iimg", defaultValues.image[0]);
        }
    }, [defaultValues]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.flexContainer}>
                    <div className={`${Styles.uploadDiv} mt-10 mx-5`}>
                        <p
                            className={`${Styles.uploadText}`}
                            onClick={handleUploadTextClick}
                        >
                            Click to Upload Image
                        </p>
                        <input
                            type="file"
                            // accept=".jpg .png .jpeg"
                            className={Styles.fileUpload}
                            {...register("image")}
                            ref={fileInputRef}
                            onChange={handleFileInputChange}
                            onClick={e => {
                                // Prevent the click event from bubbling up to the parent div
                                e.stopPropagation();
                            }}
                        />
                        {!imageFile && (
                            <span className={Styles.errorMsg}>
                                {errors.image?.message}
                            </span>
                        )}

                        {imageFile && (
                            <img
                                ref={thumbnailRef}
                                className={Styles.thumbnail}
                                alt="Thumbnail"
                            />
                        )}
                    </div>
                    <div className={`${Styles.sideForm}`}>
                        <Input
                            placeholder="Title"
                            control={control}
                            setValue={setValue}
                            name="title"
                        />

                        {
                            <span className={Styles.errorMsg}>
                                {errors.title?.message}
                            </span>
                        }

                        <Input
                            placeholder="Publishing year"
                            control={control}
                            setValue={setValue}
                            name="publishing_year"
                        />

                        {
                            <span className={Styles.errorMsg}>
                                {errors.publishing_year?.message}
                            </span>
                        }
                        <div className={`${Styles.buttons} flex gap-x-2 mt-8`}>
                            <button
                                className={Styles.cancelBtn}
                                type="button"
                                onClick={() => handleCancel()}
                            >
                                Cancel
                            </button>
                            <button className={Styles.submitBtn} type="submit">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.buttonsMobile} flex gap-x-2 mt-8`}>
                    <button
                        className={Styles.cancelBtn}
                        type="button"
                        onClick={() => handleCancel()}
                    >
                        Cancel
                    </button>
                    <button className={Styles.submitBtn} type="submit">
                        Update
                    </button>
                </div>
            </form>
        </>
    );
}
