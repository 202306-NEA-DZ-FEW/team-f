import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { useState } from "react";

import Button from "@/components/button/Button";

export default function ResetPasswordForm() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const router = useRouter(); // Use useRouter
    const auth = getAuth();

    function handleResetPassword(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                router.push("/login"); // Use router.push
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-md'>
                <h1 className='text-3xl font-semibold text-center mb-4'>
                    Reset Password
                </h1>
                <form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        {errorMessage && (
                            <p className='text-red'>{errorMessage}</p>
                        )}
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='border-green border-2 appearance-none rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='example@company.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Button size='full' onClick={(e) => handleResetPassword(e)}>
                        Reset Password
                    </Button>
                </form>
                <div className='text-center'>
                    <Link className='underline' href='/login'>
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
