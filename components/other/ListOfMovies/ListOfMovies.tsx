"use client";
import React from "react";
import Image from "next/image";
import Styles from "./ListOfMovies.module.css";

interface Movie {
    id: string;
    title: string;
    publishing_year: string;
    image_url?: string;
}

interface ListOfMoviesProps {
    movies: Movie[];
    currentPage: number;
    itemsPerPage: number;
    totalMovies: number;
    onPageChange: (newPage: number) => void;
}

const ListOfMovies: React.FC<ListOfMoviesProps> = ({
    movies,
    currentPage,
    itemsPerPage,
    totalMovies,
    onPageChange,
}) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedMovies = movies.slice(startIndex, endIndex);

    const totalPages = Math.ceil(totalMovies / itemsPerPage);

    console.log("dd", displayedMovies);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <>
            <div
                className={`${Styles.flexContainer} flex flex-wrap md:gap-8 lg:gap-20 sm:gap-1`}
            >
                {displayedMovies.map(movie => (
                    <div
                        key={movie.id}
                        className={`${Styles.moviecard} mx-auto sm:flex-basis-1/2 md:flex-basis-1/3 lg:flex-basis-1/4`}
                    >
                        {}{" "}
                        <Image
                            alt={movie.title}
                            title={movie.title}
                            width={180}
                            height={400}
                            src={`${movie?.image_url}`}
                            className=" max-w-full  h-auto mx-auto"
                        />
                        <p className={Styles.movieTitle}>{movie.title}</p>
                        <p className={Styles.publishingYear}>
                            {movie.publishing_year}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mx-auto mt-6 flex gap-x-3 justify-center text-center">
                <button
                    className={Styles.navbtn}
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => onPageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default ListOfMovies;