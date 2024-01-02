import CreateMovieForm from "@/components/other/CreateMovieForm/CreateMovieForm";
import Styles from "./CreateMovie.module.css";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function CreateMovie() {
    return (
        <>
            <ProtectedRoute>
                <div className={`container mx-auto`}>
                    <h2 className={`${Styles.CreateMovie} mt-10`}>
                        Create a new movie{" "}
                    </h2>
                    <CreateMovieForm />
                </div>
            </ProtectedRoute>
        </>
    );
}
