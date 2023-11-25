import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/button/Button";

import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState(null); // State for notification message
    const { login, currentUser } = useAuth();
    const router = useRouter();

    function handleLogin(e) {
        e.preventDefault();
        login(email, password)
            .then(() => {
                router.push("/account");
            })
            .catch((error) => {
                // Update the notification state with the error message
                setNotification("Email or password is incorrect.");
            });
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-md'>
                {/* Notification */}
                {notification && (
                    <div
                        className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'
                        role='alert'
                    >
                        <strong className='font-bold'>Error! </strong>
                        <span className='block sm:inline'>{notification}</span>
                        <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                            <svg
                                className='fill-current h-6 w-6 text-red-500'
                                role='button'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <title>Close</title>
                                <path
                                    d='M14.348 5.652a.5.5 0 01.707.707L10.707 10l4.348 4.348a.5.5 0 11-.707.707L10 10.707l-4.348 4.348a.5.5 0 01-.707-.707L9.293 10 4.945 5.652a.5.5 0 01.707-.707L10 9.293l4.348-4.348z'
                                    clipRule='evenodd'
                                    fillRule='evenodd'
                                />
                            </svg>
                        </span>
                    </div>
                )}

                <h1 className='text-3xl font-semibold text-center mb-4'>
                    Log in
                </h1>
                <form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='border-green border-2 appearance-none  rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='example@company.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='password'
                        >
                            Password
                        </label>
                        <input
                            className='border-green border-2 appearance-none  rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type='password'
                            placeholder='********'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-light   mb-2 cursor-pointer'>
                            <input
                                type='checkbox'
                                className='mr-2 leading-tight'
                            />
                            Keep me logged in
                        </label>
                    </div>
                    <Button size='full' onClick={(e) => handleLogin(e)}>
                        Log in
                    </Button>
                </form>
                <div className='text-center'>
                    Don&apos;t have an account?{" "}
                    <a className='underline' href='/sign-up'>
                        Sign up
                    </a>
                    <Link
                        className='block text-centertext-sm mt-2 underline'
                        href='/reset-password'
                    >
                        Forgot Password?
                    </Link>
                </div>
                {/* <div className='my-4 text-center'>
                    <p className='font-bold'>Log in with:</p>
                    <div className='flex justify-center'>
                        <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-2'>
                            Facebook
                        </button>
                        <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-2'>
                            Facebook
                        </button>
                        <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-2'>
                            Facebook
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
