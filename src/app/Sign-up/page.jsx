"use client";

import { Check } from "@gravity-ui/icons";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

const SignUp = () => {

  const router = useRouter();

  const onSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries());

    try {

      const { data, error } = await authClient.signUp.email({
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.image,
      });

      if (error) {

        toast.error(error.message || "Signup failed!");

        return;
      }

      toast.success("Account created successfully!");

      console.log(data);

      setTimeout(() => {
        router.push("/");
      }, 1500);

    } catch (err) {

      console.log(err);

      toast.error("Something went wrong!");
    }
  };

  // ✅ Google Login
  const signIn = async () => {

    try {

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

    } catch (error) {

      console.log(error);

      toast.error("Google Sign In Failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center w-full px-4">

      <Card className="border shadow-lg shadow-lime-100 p-8 w-full max-w-md">

        <div>
          <h1 className="text-2xl font-bold text-center text-black">
            Create an Account
          </h1>
        </div>

        <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">

          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter image URL" />
            <FieldError />
          </TextField>

          {/* Email */}
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
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {

              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex justify-center gap-2 w-full">

            <Button type="submit">
              <Check />
              Submit
            </Button>

            <Button type="reset" variant="secondary">
              Reset
            </Button>

          </div>

        </Form>

        {/* Login */}
        <div className="mt-4 flex justify-center gap-2">

          <p className="text-sm text-gray-500">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="text-red-500 hover:underline"
          >
            Login here
          </Link>

        </div>

     
        <div className="mt-4">

          <Button
            className="w-full"
            onClick={signIn}
          >
            Sign up with Google
          </Button>

        </div>

      </Card>

    </div>
  );
};

export default SignUp;