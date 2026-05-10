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

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photo,
      callbackURL: "/login",
    });

    if (error) {
      toast.error("Registration Failed: " + error.message);
      return;
    }

    if (data) {
      toast.success("Registration Successful!");
      router.push("/login"); 
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
          Create an Account
        </h2>

        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input name="name" placeholder="Your Name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input name="email" placeholder="Your Email" />
          <FieldError />
        </TextField>

        <TextField isRequired name="photo">
          <Label>Photo URL</Label>
          <Input name="photo" placeholder="Paste your image link" />
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {isVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </button>
          </div>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700 w-full"
        >
          <Check />
          Register
        </Button>

        <div className="text-center text-sm text-gray-400">OR</div>

        <Button
          type="button"
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white hover:bg-red-600 w-full"
        >
          Continue with Google
        </Button>

        <p className="text-sm text-center mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterPage;