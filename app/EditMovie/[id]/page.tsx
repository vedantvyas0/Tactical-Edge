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
    id: string;
    title: string;
    publishing_year: string;
    user_id: string;
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
                `http://localhost:5000/api/movies/${params.id}`
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
                    <p>Edit Page for ID: {params.id} </p>
                    <EditMovieForm defaultValues={movieData} />
                </>
            )}
        </div>
    );
}
