import React from "react";

export default function LoginForm() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-md'>
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
                            className='border-emerald-600 border-2 appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='example@company.com'
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
                            className='border-emerald-600 border-2 appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type='password'
                            placeholder='********'
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
                    <button
                        className='bg-[#16a34a] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-full rounded-2xl py-2 px-4'
                        type='submit'
                    >
                        Log in
                    </button>
                </form>
                <div className='text-center'>
                    Don&apos;t have an account?{" "}
                    <a className='underline' href='#'>
                        Sign up
                    </a>
                    <a
                        className='block text-centertext-sm mt-2 underline'
                        href='#'
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className='my-4 text-center'>
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
                </div>
            </div>
        </div>
    );
}
