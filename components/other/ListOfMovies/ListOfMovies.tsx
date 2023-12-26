import Image from "next/image";
import Styles from "./ListOfMovies.module.css";
export default function ListOfMovies() {
    return (
        <>
            <div className={`${Styles.moviecard} mx-10`}>
                <Image
                    alt="movie"
                    title="movie"
                    width={266}
                    height={400}
                    src="/movies/Movie1.jpg"
                    className="mx-auto"
                />
                <p className={Styles.movieTitle}>Movie 1</p>
                <p className={Styles.publishingYear}>2021</p>
            </div>
        </>
    );
}
