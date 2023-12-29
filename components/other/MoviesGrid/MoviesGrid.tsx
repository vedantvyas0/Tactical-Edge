import React from "react";
import Image from "next/image";
import Styles from "./ListOfMovies.module.css";

interface Movie {
    id: string;
    title: string;
    publishingYear: string;
    imagePath?: string;
}

interface ListOfMoviesProps {
    movies: Movie[];
    currentPage: number;
    itemsPerPage: number;
}

const ListOfMovies: React.FC<ListOfMoviesProps> = ({
    movies,
    currentPage,
    itemsPerPage,
}) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedMovies = movies.slice(startIndex, endIndex);

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
                        <Image
                            alt={movie.title}
                            title={movie.title}
                            width={180}
                            height={400}
                            src={`${movie.imagePath}`}
                            className=" max-w-full  h-auto mx-auto"
                        />
                        <p className={Styles.movieTitle}>{movie.title}</p>
                        <p className={Styles.publishingYear}>
                            {movie.publishingYear}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mx-auto mt-6 flex gap-x-3 justify-center text-center">
                <button className={Styles.navbtn}>Prev</button>
                <button>1</button>
                <button>2</button>
                <button>Next</button>
            </div>
        </>
    );
};

export default ListOfMovies;
