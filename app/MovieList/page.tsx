import { ST } from "next/dist/shared/lib/utils";
import SubmitButton from "../../components/UI/SubmitButton/SubmitButton";
import Styles from "./MovieListPage.module.css";
import ListOfMovies from "../../components/other/ListOfMovies/ListOfMovies";

export default function MovieList() {
    let movieList = 1;

    if (movieList) {
        return (
            <>
                <div>
                    <div className="flex justify-between mx-10 my-10 ">
                        <h2>My movies</h2>
                        <p>Logout</p>
                    </div>
                    <div>
                        <ListOfMovies />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={Styles.movieList}>
                <h2 className="mb-5">Your movie list is empty</h2>
                <SubmitButton title="Add a new movie" />
            </div>
        </>
    );
}
