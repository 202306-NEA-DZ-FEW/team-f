import firebase from "firebase/app"; // Import Firebase app
import React, { useEffect, useState } from "react";
import "firebase/auth"; // Import Firebase Authentication
import "firebase/firestore"; // Import Firestore
import "firebase/storage"; // Import Firebase Storage
import { setDoc } from "@/lib/firebase/firestoreFunctions";
import auth from "@/lib/firebase/firebase";

import { useAuth } from "@/context/AuthContext";

const SignUpForm = () => {
    const { signup } = useAuth();
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

    const handleSignUp = async () => {
        try {
            if (!firebaseInitialized) {
                console.log("Firebase is not yet initialized. Please wait.");
                return;
            }
            const { name, email, password, phone, location } = formData;

            // Create a user with email and password
            const userCredential = await signup(
                formData.email,
                formData.password,
            );

            const user = userCredential.user;
            const db = firebase.firestore(); // Initialize Firestore (if not already done in 'firebase.js')

            await db.collection("users").doc(user.uid).set({
                name,
                email,
                phone,
                location,
            });

            //  reset the form
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                location: "",
            });

            console.log("User signed up successfully.");
        } catch (error) {
            console.error("Error signin up:", error.message);
        }
    };
    return (
        <section>
            <div className='flex justify-between items-center flex-col text-[#3C4347] bg-[#F1F1F1]'>
                <h1 className='font-bold text-xl my-2 lg:my-8'>Sign Up</h1>
                <form className='flex flex-col lg:w-[824px]'>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm'
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name Surename'
                            autoComplete='off'
                        />
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                            type='text'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='mail@mail.com'
                            autoComplete='off'
                        />
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='at least 8 characters'
                        />
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='confirmPassword'>
                            Confirm password
                        </label>
                        <input
                            className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='at least 8 characters'
                        />
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='phone'>
                            Phone
                        </label>
                        <input
                            className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                            type='number'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='+1122334455'
                            autoComplete='off'
                        />
                    </div>
                    <div className='w-auto m-3 lg:m-2'>
                        <label className='ml-5' htmlFor='location'>
                            Location
                        </label>
                        <select
                            id='location'
                            name='location'
                            value={formData.location}
                            onChange={handleChange}
                            placeholder='Select location'
                            className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm'
                        >
                            <option value='Location 1'>Location 1</option>
                            <option value='Location 2'>Location 2</option>
                            <option value='Location 3'>Location 3</option>
                        </select>
                    </div>
                </form>
                <button
                    className='bg-green text-white border rounded-2xl w-40 lg:w-72 py-2.5 px-5 mt-4 font-medium'
                    onClick={handleSignUp}
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
