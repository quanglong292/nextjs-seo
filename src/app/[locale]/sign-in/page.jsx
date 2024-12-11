"use client";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import { DotObject } from "@/components/templates/BackgroundObjects";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import { Link } from "@/i18n/routing";
import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="w-full m-4 max-w-md p-4 py-8 md:p-8 space-y-14 md:space-y-6 bg-section-background rounded shadow-md">
          <Logo className="flex justify-center mb-4" />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-text-color leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-secondary italic text-sm">
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full transition-all px-4 font-medium text-white bg-secondary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 py-4 uppercase"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center">
              <Text className="lg:text-sm">Don't have an account yet? </Text>
              <Link href="/sign-up" className="lg:text-sm text-secondary mx-1">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
        <DotObject className="w-32 h-32 top-[635px] left-[25%] bg-primary animate-upDown" />
        <DotObject className="w-32 h-32 top-[74%] left-[57%] bg-cyan-400" />
        <DotObject className="w-32 h-32 top-[300px] left-[8%] bg-red-300 animate-upDown" />
        <DotObject className="w-32 h-32 top-[150px] left-[75%] bg-pink-300" />
        {/* <DotObject className="w-32 h-32 top-[560px] left-[70%]" /> */}
      </div>
      <ReadyForIt />
    </>
  );
};

export default SignIn;
