/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsBasketFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { getDocData } from "@/lib/firebase/firestoreFunctions";

import Button from "@/components/button/Button";

import { useAuth } from "@/context/AuthContext";

import EditProfile from "./EditProfile";

const Profile = () => {
    const { currentUser } = useAuth();

    const [editProfile, setEditProfile] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getDocData("users", currentUser.uid).then((data) => {
            setUserData(data);
        });
    }, []);

    const { name, avatarUrl, bio, publicEmail, publicPhoneNumber, location } =
        userData;
    return (
        <>
            {editProfile && (
                <EditProfile
                    setEditProfile={setEditProfile}
                    name={name}
                    avatarUrl={avatarUrl}
                    bio={bio}
                    publicEmail={publicEmail}
                    publicPhoneNumber={publicPhoneNumber}
                    location={location}
                    setUserData={setUserData}
                />
            )}
            <div className='mt-20 mb-32 text-black h-fit'>
                <h1 className='text-3xl font-semibold text-center'>
                    My account
                </h1>
                <div className='flex items-center w-full p-4 my-8  rounded-2xl justify-center  gap-8 border border-gray '>
                    <div className='rounded-full w-36 h-36 '>
                        {!avatarUrl ? (
                            <div className='w-full h-full rounded-full flex justify-center items-center bg-lime-600 text-white text-4xl font-bold uppercase'>
                                {name && name[0]}
                            </div>
                        ) : (
                            <img
                                src={avatarUrl}
                                alt='profile'
                                className='rounded-full object-cover w-full h-full'
                            />
                        )}
                    </div>
                    <div className=' flex flex-col justify-between  w-fit px-5 h-fit '>
                        <Button
                            onClick={() => setEditProfile(true)}
                            className='bg-black'
                        >
                            Edit profile
                            <AiOutlineEdit className='text-xl' />
                        </Button>
                        <div className='flex flex-col  justify-center'>
                            <div className='mt-3 h-full flex flex-col justify-between'>
                                <h2 className='text-2xl font-semibold'>
                                    {name}
                                </h2>
                                <p className='  opacity-75  py-5'>
                                    {`${(bio && bio) || "Add Bio"}`}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between w--[60%] '>
                            <div className='flex gap-2  items-center font-semibold'>
                                <AiOutlineMail className='text-2xl text-green' />
                                {publicEmail}
                            </div>
                            <div className='flex gap-2  items-center font-semibold'>
                                <AiOutlinePhone className='text-2xl  text-green' />

                                {publicPhoneNumber}
                            </div>
                            <div className='flex gap-2  items-center font-semibold'>
                                <GoLocation className='text-2xl  text-green' />
                                {location}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
