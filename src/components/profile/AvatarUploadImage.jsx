/* eslint-disable @next/next/no-img-element */
import { AiFillCamera } from "react-icons/ai";

function AvatarUploadImage({ image, setFile, file }) {
    return (
        <>
            <div className='group w-24 h-24 rounded-full relative '>
                <input
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                    }}
                    type='file'
                    className='absolute top-0 left-0 right-0 bottom-0 rounded-full opacity-0 z-30 cursor-pointer'
                />
                <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 '>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 rounded-full'></div>
                    <AiFillCamera className='text-5xl text-white z-10' />
                </div>
                <img
                    src={file ? URL.createObjectURL(file) : image}
                    alt='avatar'
                    className='rounded-full object-cover w-full h-full'
                />
            </div>
            <p className='text-sm text-black -mt-4'>
                Change your profile picture
            </p>
        </>
    );
}

export default AvatarUploadImage;
