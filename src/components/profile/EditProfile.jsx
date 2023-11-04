import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

import { getDocData, updateDocData } from "@/lib/firebase/firestoreFunctions";
import UseUploadImage from "@/lib/hooks/useUploadImage";

import Button from "@/components/button/Button";
import Input from "@/components/input";

import { useAuth } from "@/context/AuthContext";

import AvatarUploadImage from "./AvatarUploadImage";

const inputs = [
    {
        name: "name",
        type: "text",
        labelText: "Your Name",
        placeholder: "Your Name",
        requiredMessage: "Enter a name please",
        validation: {
            maxLength: {
                value: 30,
                message: "30 character max",
            },
        },
    },
    {
        name: "publicEmail",
        type: "email",
        labelText: "Your Public Email",
        placeholder: "Enter Email",
        requiredMessage: false,
        validation: {},
    },
    {
        name: "publicPhoneNumber",
        type: "number",
        labelText: "Phone Number",
        placeholder: "Phone Number",
        requiredMessage: false,
        validation: {
            maxLength: {
                value: 11,
                message: "Enter a valid number",
            },
            minLength: {
                value: 9,
                message: "Enter a valid number",
            },
        },
    },
    {
        name: "bio",
        type: "text",
        labelText: "Bio",
        placeholder: "Bio",
        requiredMessage: false,
        validation: {
            maxLength: {
                value: 50,
                message: "Max 50 characters",
            },
        },
    },
    {
        name: "location",
        type: "text",
        labelText: "Location",
        placeholder: "Location",
        requiredMessage: false,
        validation: {},
    },
];

function EditProfile({
    setEditProfile,
    setUserData,
    name,
    avatarUrl,
    bio,
    publicEmail,
    publicPhoneNumber,
    location,
}) {
    const { currentUser } = useAuth();
    const [uploadFile] = UseUploadImage();
    const [file, setFile] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name,
            avatarUrl,
            bio,
            publicEmail,
            publicPhoneNumber,
            location,
        },
    });

    const updateProfile = async (data) => {
        if (file) {
            const downloadUrl = await uploadFile(file);
            data.avatarUrl = downloadUrl;
        }
        updateDocData("users", currentUser.uid, {
            ...data,
        });
        setUserData({ ...data });
        setEditProfile(false);
    };

    return (
        <div className='absolute w-full h-full right-0 top-0 z-40 flex justify-center items-center overflow-hidden transition-opacity'>
            <div className='absolute  w-full h-full bg-black opacity-80 right-0 top-0'></div>
            <div className='relative w-2/3 h-5/6 rounded-lg  p-12 bg-white bg-opacity-100 z-50 shadow-xl overflow-y-scroll'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold'>Edit profile</h2>
                    <AiOutlineClose
                        onClick={() => setEditProfile(false)}
                        className='text-3xl text-black cursor-pointer'
                    />
                </div>
                <form action='' className='mt-4 flex flex-col gap-6 '>
                    <AvatarUploadImage
                        setFile={setFile}
                        file={file}
                        image={avatarUrl}
                        register={register}
                    />

                    {inputs.map((input) => (
                        <Input
                            key={input.name}
                            name={input.name}
                            type={input.type}
                            labelText={input.labelText}
                            placeholder={input.placeholder}
                            requiredMessage={input.requiredMessage}
                            register={register}
                            errors={errors}
                            validation={input.validation}
                        />
                    ))}
                    <Button
                        onClick={handleSubmit(updateProfile)}
                        variant='default'
                        size='lg'
                        className={clsx("mt-5 mx-auto", {
                            "cursor-not-allowed bg-slate-300": isSubmitting,
                            "bg-green": !isSubmitting,
                        })}
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
