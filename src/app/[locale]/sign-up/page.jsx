"use client";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import AuthLayout from "@/components/layout/AuthLayout";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import { Link } from "@/i18n/routing";
import React, { useState } from "react";

const SignUp = () => {
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
  };

  return (
    <>
      <AuthLayout>
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
          <div>
            <button
              type="submit"
              className="w-full transition-all px-4 font-medium text-white bg-secondary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 py-4 uppercase"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Text className="lg:text-sm">Already have an account? </Text>
            <Link href="/sign-in" className="lg:text-sm text-secondary mx-1">
              Sign in
            </Link>
          </div>
        </form>
      </AuthLayout>
      <ReadyForIt />
    </>
  );
};

export default SignUp;
