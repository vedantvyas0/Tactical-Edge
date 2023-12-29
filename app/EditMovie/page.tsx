import ProtectedRoute from "@/components/auth/ProtectedRoute";
import CreateMovieForm from "@/components/other/CreateMovieForm/CreateMovieForm";
import EditMovieForm from "@/components/other/EditMovieForm/EditMovieForm";

export default function page() {
    return (
        <>
            <ProtectedRoute>
                <div className="container mx-auto">
                    <h2 className="mt-10">Edit</h2>
                    <EditMovieForm />
                </div>
            </ProtectedRoute>
        </>
    );
}
