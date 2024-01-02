// EditPage.tsx
"use client";
import EditMovieForm from "@/components/other/EditMovieForm/EditMovieForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface EditPageProps {
    params: {
        id: string;
    };
}

interface Movie {
    _id: string;
    title: string;
    publishing_year: string;
    user_id: string;
    image_url: string;
}

interface PaginatedMovies {
    data: Movie[];
}

export default function EditPage({ params }: EditPageProps) {
    const [movieData, setMovieData] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            axios.defaults.headers.get["Authorization"] = token;
            axios.defaults.headers.common["Content-Type"] = "application/json";

            const response = await axios.get(
                `http://3.144.22.101/api/movies/${params.id}`
            );
            const data = await response.data;
            console.log("Movie Data:", data);
            setMovieData(data);
        } catch (error) {
            console.error("Error fetching movie:", error);
            setError("Error fetching movie");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {movieData && (
                <>
                    <h2 className="flex align-bottom gap-2 m-6 items-center">
                        Edit
                    </h2>
                    <EditMovieForm
                        defaultValues={movieData}
                        params={params.id}
                    />
                </>
            )}
        </div>
    );
}
