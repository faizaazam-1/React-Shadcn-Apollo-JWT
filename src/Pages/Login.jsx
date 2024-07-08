"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Define the schema for form validation using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 to-pink-300 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full">
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-8">
          <img src="src/images/poshpetals.jpeg" alt="Artwork" className="w-full h-full object-cover"/>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-8">
          <div className="w-full">
            <div className="flex justify-center sm:justify-end mb-4">
              <p className="text-sm">
                Don't have an account? <a href="/signup" className="text-blue-500">Sign up here</a>
              </p>
            </div>
            <CardHeader className="text-center border-none">
              <CardTitle className="text-2xl">Login to Your Service</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className={`border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md px-3 py-2`}
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder="8+ characters"
                    className={`border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md px-3 py-2`}
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <CardFooter className="flex justify-center mt-4 border-none">
                  <Button type="submit" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600">Login</Button>
                </CardFooter>
              </form>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
