"use client";

import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        }

        if (session) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setName(session.user.name || "");
            setImage(session.user.image || "");
        }
    }, [session, isPending, router]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        if (error) {
            toast.error("Update Failed: " + error.message);
            return;
        }

        toast.success("Profile Updated Successfully!");
        router.push("/profile");
    };

    if (isPending) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (!session) return null;

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <form
                onSubmit={handleUpdate}
                className="w-96 bg-gray-100 p-6 rounded-xl shadow-md border space-y-4"
            >
                <h2 className="text-xl font-bold text-center">
                    Update Profile
                </h2>

                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                />

                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Photo URL"
                />

                <button className="btn btn-primary w-full">
                    Update Information
                </button>
            </form>
        </div>
    );
}