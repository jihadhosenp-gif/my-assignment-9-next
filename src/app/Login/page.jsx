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

const LoginPage = () => {

    const router = useRouter();

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);

        const user = Object.fromEntries(formData.entries());

        try {

            const { data, error } = await authClient.signIn.email({
                email: user.email,
                password: user.password,
            });

           
            if (error) {

                toast.error(error.message || "Login failed!");

                console.log("Error:", error);

                return;
            }

           
            toast.success("Login successful!");

            console.log("User:", data);

        
            setTimeout(() => {
                router.push("/");
            }, 1500);

        } catch (err) {

            console.log(err);

            toast.error("Something went wrong!");
        }
    };
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div className="flex min-h-screen items-center justify-center w-full px-4">

            <Card className="border shadow-lg shadow-lime-100 p-8 w-full max-w-md">

                <div>
                    <h1 className="text-2xl font-bold text-center text-black">
                        Login to your account
                    </h1>
                </div>

                <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">

                    

                
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

              
                <div className="mt-4 flex justify-center gap-2">

                    <p className="text-sm text-gray-500">
                        Already have an account?
                    </p>

                    <Link
                        href="/Sign-up"
                        className="text-red-500 hover:underline"
                    >
                        Sign up
                    </Link>

                </div>
               

            </Card>

        </div>
    );
};

export default LoginPage;