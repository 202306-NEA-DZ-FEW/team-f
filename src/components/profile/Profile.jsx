import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import { getDocData } from "@/lib/firebase/firestoreFunctions";

import Button from "@/components/button/Button";

import { useAuth } from "@/context/AuthContext";

import EditProfile from "./EditProfile";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

const Profile = () => {
    const { currentUser } = useAuth();

    const [editProfile, setEditProfile] = useState(false);
    const [userData, setUserData] = useState({});
    const [hideAltTextBio, setHideAltTextBio] = useState(false);

    useEffect(() => {
        // Fetch user data when the component mounts
        getUserData();
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    async function getUserData() {
        try {
            const userdata = collection(db, "users");
            const response = await getDocs(userdata);

            const data = response.docs.map((doc) => ({
                data: doc.data(),
                publicPhoneNumber: doc.data()["phone number"],
            }));

            setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Handle the error here (e.g., show an error message to the user)
        }
    }

    const { name, avatarurl, bio, email, location } = userData[0]?.data || {};
    const { publicPhoneNumber } = userData[0] || {};

    const handleIconClick = () => {
        setHideAltTextBio(true);
    };

    return (
        <>
            {editProfile && (
                <EditProfile
                    setEditProfile={setEditProfile}
                    name={name}
                    avatarurl={avatarurl}
                    bio={bio}
                    email={email}
                    publicPhoneNumber={publicPhoneNumber}
                    location={location}
                    setUserData={setUserData}
                />
            )}
            <div className='mt-10 mb-32 text-black h-fit'>
                <h1 className='text-3xl font-semibold'>My account</h1>
                <div className='flex flex-col md:flex-row items-center w-full p-4 my-5 rounded-lg bg-gray'>
                    <div className='relative mb-5 md:mb-0 md:mr-5 w-full md:w-[13rem] h-36'>
                        <div className='rounded-full w-36 h-36 md:absolute md:top-1/4 md:left-8'>
                            <img
                                src={avatarurl}
                                alt={hideAltTextBio ? "" : "profile"}
                                className='rounded-full object-cover w-full h-full'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col w-full md:w-[100%]'>
                        <div className='mt-3 h-full flex flex-col justify-between'>
                            <h2 className='text-2xl font-semibold mb-2'>
                                {name}
                            </h2>
                            <p
                                className={`opacity-75 w-full md:w-3/4 ${
                                    hideAltTextBio ? "hidden" : ""
                                }`}
                            >
                                {`${(bio && bio) || "Add Bio"}`}
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-end w-full'>
                            <div className='md:order-2'>
                                <Button
                                    onClick={() => setEditProfile(true)}
                                    className='bg-black mb-2 md:mb-0'
                                >
                                    Edit profile
                                    <AiOutlineEdit className='text-xl' />
                                </Button>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2 items-center md:order-1'>
                                <div className='flex gap-2 items-center'>
                                    <AiOutlineMail className='text-2xl text-green' />
                                    {email}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <AiOutlinePhone className='text-2xl text-green' />
                                    {publicPhoneNumber}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <GoLocation className='text-2xl text-green' />
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
