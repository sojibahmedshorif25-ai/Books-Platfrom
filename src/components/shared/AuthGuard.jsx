"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AuthGuard = ({ children }) => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            toast.info("Only registered users can see book details");
            router.push("/login");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <p>Loading...</p>
            </div>
        );
    }

    if (!session) return null;

    return children;
};

export default AuthGuard;   