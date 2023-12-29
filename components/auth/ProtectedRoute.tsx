"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            // Redirect to the login page if no token is found
            router.replace("/");
        }
    }, []);

    return <>{children}</>;
};

export default ProtectedRoute;
