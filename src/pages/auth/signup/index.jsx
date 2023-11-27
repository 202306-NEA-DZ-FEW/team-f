import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { dbAddDoc } from "@/lib/firebase/firestoreFunctions";

import Button from "@/components/button/Button";
import Input from "@/components/input";

import { signupInputs } from "@/constants/inputs";
import { useAuth } from "@/context/AuthContext";

const SignUpForm = () => {
    const { signup, currentUser } = useAuth();
    const [signupLoading, setSignupLoading] = useState(false);

    const router = useRouter(); // Initialize useRouter

    const {
        register,
        getValues,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(); // Initialize react-hook-form
    const inputs = signupInputs(getValues);

    const onSignup = async (data) => {
        setSignupLoading(true);
        await signup(data.email, data.password);
    };
    const addUserToDatabase = async () => {
        const data = watch();
        await dbAddDoc(
            {
                name: data.name,
                avatarUrl: "",
                bio: "",
                publicEmail: data.email,
                publicPhoneNumber: data.phone,
                location: data.location,
            },
            "users",
            currentUser.uid,
        );
        setSignupLoading(false);
        router.push("/account");
    };
    useEffect(() => {
        if (currentUser && signupLoading) {
            addUserToDatabase();
        }
        if (currentUser) {
            router.push("/account");
        }
    }, [currentUser]);

    return (
        <section>
            <div className='flex flex-col items-center'>
                <h1 className='font-medium text-3xl my-2 lg:my-12 text-green'>
                    Sign Up
                </h1>
                <form className='flex flex-col lg:w-[30rem] h-screen'>
                    {inputs.map((input, index) => (
                        <div className='my-3' key={index}>
                            <Input
                                {...input}
                                register={register}
                                errors={errors}
                                className='mt-6'
                            />
                        </div>
                    ))}
                </form>
                <Button
                    className='bg-green text-white border rounded-2xl w-40 lg:w-72 py-2.5 px-5 mt-4 font-medium'
                    type='submit'
                    onClick={handleSubmit(onSignup)}
                    disabled={signupLoading}
                >
                    Sign Up
                </Button>
                <span className='my-10 lg:font-medium font-bold'>
                    Sign Up With
                </span>
            </div>
        </section>
    );
};

export default SignUpForm;
