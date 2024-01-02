"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ListOfMovies from "../../components/other/ListOfMovies/ListOfMovies";
import { useRouter } from "next/navigation";
import Styles from "./MovieListPage.module.css";

interface Movie {
    _id: string;
    title: string;
    publishing_year: string;
    user_id: string;
}

interface PaginatedMovies {
    data: Movie[];
    page: number;
    limit: number;
    totalPage: number;
    totalCount: number;
}

export default function MovieList() {
    const [moviesData, setMoviesData] = useState<PaginatedMovies>({
        data: [],
        page: 1,
        limit: 8,
        totalPage: 1,
        totalCount: 0,
    });
    const [loading, setLoading] = useState<Boolean>(true);
    const router = useRouter();

    useEffect(() => {
        fetchMovies();
    }, [moviesData.page]);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            axios.defaults.headers.get["Authorization"] = token;
            axios.defaults.headers.common["Content-Type"] = "application/json";

            const response = await axios.get("http://3.144.22.101/api/movies", {
                params: {
                    page: moviesData.page,
                    limit: moviesData.limit,
                },
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
            });
            const data = await response.data;
            console.log("mmm", data);
            setMoviesData(data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/");
    };

    const handlePageChange = (newPage: number) => {
        setMoviesData(prevData => ({ ...prevData, page: newPage }));
    };

    if (loading) {
        return <p className="h-full">Loading...</p>;
    }

    return (
        <ProtectedRoute>
            <div className="container mx-auto">
                <div className="flex justify-between mx-10 my-10 ">
                    <h2
                        className={`${Styles.mymovie} flex align-bottom gap-2 items-center`}
                    >
                        My movies
                        <Link href="/CreateMovie">
                            <Image
                                src="/icons/AddMovie.svg"
                                height={32}
                                width={32}
                                alt="add movie"
                                title="add movie"
                                className="mx-auto"
                            />
                        </Link>
                    </h2>
                    <p
                        className="flex gap-2 items-center"
                        onClick={handleLogout}
                    >
                        Logout
                        <Image
                            src="/icons/logout.svg"
                            height={24}
                            width={24}
                            alt="add movie"
                            title="add movie"
                            className="mx-auto"
                        />
                    </p>
                </div>
                <div>
                    <ListOfMovies
                        movies={moviesData.data}
                        currentPage={moviesData.page}
                        itemsPerPage={moviesData.limit}
                        totalMovies={moviesData.totalCount}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </ProtectedRoute>
    );
}
