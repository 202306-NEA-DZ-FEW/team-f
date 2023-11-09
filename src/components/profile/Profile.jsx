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
            <div className='mt-10 mb-32 text-black h-fit'>
                <h1 className='text-3xl font-semibold'>My account</h1>
                <div className='flex items-center w-full p-4 my-5  h-40 rounded-lg bg-gray'>
                    <div className='relative w-[13rem] h-full'>
                        <div className='rounded-full w-36 h-36 absolute  top-1/4 left-8'>
                            <img
                                src={avatarUrl}
                                alt='profile'
                                className='rounded-full object-cover w-full h-full'
                            />
                        </div>
                    </div>
                    <div className=' flex justify-between  w-full px-5  h-full'>
                        <div className='flex flex-col  justify-center'>
                            <div className='mt-3 h-full flex flex-col justify-between'>
                                <p className='  opacity-75 w-3/4'>
                                    {`${(bio && bio) || "Add Bio"}`}
                                </p>
                                <h2 className='text-2xl font-semibold'>
                                    {name}
                                </h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-end w--[60%]'>
                            <Button
                                onClick={() => setEditProfile(true)}
                                className='bg-black'
                            >
                                Edit profile
                                <AiOutlineEdit className='text-xl' />
                            </Button>
                            <div className='flex gap-6 flex-row-reverse'>
                                {/* <div className='flex gap-2 text-white py-1 px-4 items-center font-semibold justify-start text-lg h-fit w-fit bg-slate-500 rounded-full'>
                                    <BsBasketFill />
                                    {5 + " "}
                                    items
                                </div> */}
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
            </div>
        </>
    );
};

export default Profile;
