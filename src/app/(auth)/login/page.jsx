"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error("Login Failed: " + error.message);
            return;
        }

        if (data) {
            toast.success("Login Successful!");
            router.push("/");
        }
    };


    const handleGoogleLogin = async () => {
        const { error, data } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (data) {
            toast.success("Login Successful!");
            router.push("/");
        }

        if (error) {
            toast.error("Google Login Failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <Form
                className="flex w-96 flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200"
                onSubmit={onSubmit}
            >

                <h2 className="text-2xl font-bold text-center mb-2">
                    Login to Your Account
                </h2>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name="email" placeholder="Your Email" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="password"
                    type={isVisible ? "text" : "password"}
                >
                    <Label>Password</Label>

                    <div className="relative">
                        <Input name="password" placeholder="Enter your password" />

                        <button
                            type="button"
                            onClick={() => setIsVisible(!isVisible)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 p-1 rounded hover:bg-gray-200"
                        >
                            {isVisible ? (
                                <Eye className="size-4" />
                            ) : (
                                <EyeSlash className="size-4" />
                            )}
                        </button>
                    </div>

                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button
                        type="submit"
                        className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                    >
                        <Check />
                        Login
                    </Button>
                </div>

                <div className="text-center text-sm text-gray-400">OR</div>

                <Button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="bg-red-500 text-white hover:bg-red-600 w-full"
                >
                    Continue with Google
                </Button>

                <p className="text-sm text-center mt-2">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Register
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default LoginPage;