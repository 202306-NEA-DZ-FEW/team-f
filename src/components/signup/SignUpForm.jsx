import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "@/context/AuthContext";

const SignUpForm = () => {
    const { signup } = useAuth();
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm(); // Initialize react-hook-form

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        location: "",
    });
    const [firebaseInitialized, setFirebaseInitialized] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (data) => {
        try {
            if (!firebaseInitialized) {
                console.log("Firebase is not yet initialized. Please wait.");
                return;
            }
            const { email, password, confirmPassword, phone, location } = data;

            // Add validation logic for email and password
            if (email === "" || password === "") {
                console.error("Email and password are required.");
                return;
            }
            if (!isValidEmail(email)) {
                console.error("Invalid email format.");
                return;
            }
            if (password.length < 6) {
                console.error("Password must have at least 6 characters.");
                return;
            }
            if (confirmPassword.length < 6) {
                console.error("Password and Confirm Password do not match.");

                return;
            }
            if (phone === "") {
                console.error("Phone number is required.");
                return;
            }
            // Validate the location (country and city)
            const locationParts = location.split(",");
            if (locationParts.length !== 2) {
                console.error(
                    "Location must be in the format 'Country, City'.",
                );
                return;
            }

            // Create a user with email and password
            const userCredential = await signup(email, password);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    return (
        <section>
            <div className='flex justify-between items-center flex-col text-[#3C4347] bg-[#F1F1F1]'>
                <h1 className='font-bold text-xl my-2 lg:my-8'>Sign Up</h1>
                <form
                    className='flex flex-col lg:w-[824px]'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className={`rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm ${
                                errors.name ? "border-red-500" : ""
                            }`}
                            type='text'
                            id='name'
                            {...register("name", {
                                required: true,
                                message: "hello",
                            })}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name Surname'
                            autoComplete='off'
                        />
                        {errors.name && (
                            <span className='text-red'>
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className={`rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm ${
                                errors.email ? "border-red-500" : ""
                            }`}
                            type='text'
                            id='email'
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='mail@mail.com'
                            autoComplete='off'
                        />
                        {errors.email && (
                            <span className='text-red'>
                                {errors.email.type === "required"
                                    ? "Email is required."
                                    : "Invalid email format."}
                            </span>
                        )}
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className={`rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm ${
                                errors.password ? "border-red-500" : ""
                            }`}
                            type='password'
                            id='password'
                            {...register("password", {
                                required: true,
                                minLength: 6,
                            })}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='at least 6 characters'
                        />
                        {errors.password && (
                            <span className='text-red'>
                                {errors.password.type === "required"
                                    ? "Password is required."
                                    : "Password must have at least 6 characters."}
                            </span>
                        )}
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='confirmPassword'>
                            Confirm password
                        </label>
                        <input
                            className={`rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm ${
                                errors.confirmPassword ? "border-red-500" : ""
                            }`}
                            type='password'
                            id='confirmPassword'
                            {...register("confirmPassword", {
                                validate: (match) => {
                                    const password = getValues("password");
                                    return (
                                        match === password ||
                                        "Passwords should match!"
                                    );
                                },
                            })}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Confirm password'
                        />
                        {errors.confirmPassword && (
                            <span className='text-red'>
                                {errors.confirmPassword.type === "required"
                                    ? "Confirm Passwordnpm  is required."
                                    : "Passwords do not match."}
                            </span>
                        )}
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='phone'>
                            Phone
                        </label>
                        <input
                            className={`rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm ${
                                errors.phone ? "border-red-500" : ""
                            }`}
                            type='tel'
                            id='phone'
                            {...register("phone", { required: true })}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='+1122334455'
                            autoComplete='off'
                        />
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='location'>
                            Location (Country, City)
                        </label>
                        <input
                            className={`rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm ${
                                errors.location ? "border-red-500" : ""
                            }`}
                            type='text'
                            id='location'
                            {...register("location", { required: true })}
                            value={formData.location}
                            onChange={handleChange}
                            placeholder='Country, City'
                            autoComplete='off'
                        />
                    </div>
                </form>
                <button
                    className='bg-green text-white border rounded-2xl w-40 lg:w-72 py-2.5 px-5 mt-4 font-medium'
                    type='submit'
                    onClick={handleSubmit(onSubmit)}
                >
                    Sign Up
                </button>
                <span className='my-10 lg:font-medium font-bold'>
                    Sign Up With
                </span>
            </div>
        </section>
    );
};

export default SignUpForm;
