import React, { useState, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Index() {
    const clothes = "whatever";
    const place = "whatever";
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [deleteIndices, setDeleteIndices] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const photoURLs = [...selectedPhotos];

        for (let i = 0; i < files.length; i++) {
            const photoURL = URL.createObjectURL(files[i]);
            photoURLs.push(photoURL);
        }

        setSelectedPhotos(photoURLs);
    };

    const handleDelete = (index) => {
        const updatedPhotos = [...selectedPhotos];
        updatedPhotos.splice(index, 1);
        setSelectedPhotos(updatedPhotos);
        setDeleteIndices([...deleteIndices, index]);
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-md'>
                <h1 className='text-3xl font-semibold mb-3 text-center'>
                    Add an Item
                </h1>
                <form className='space-y-4'>
                    <div className='flex flex-col'>
                        <label htmlFor='title' className='text-sm font-medium'>
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            className='border-current p-2 rounded-md shadow-md text-gray-400'
                            placeholder='Title'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label
                            htmlFor='category'
                            className='text-sm font-medium'
                        >
                            Category <BiSolidDownArrow />
                        </label>
                        <select
                            id='category'
                            className='border-current p-2 rounded-md shadow-md text-gray-400'
                        >
                            <option>{clothes}</option>
                            <option>{clothes}</option>
                            <option>{clothes}</option>
                            <option>{clothes}</option>
                            <option>{clothes}</option>
                            <option>{clothes}</option>
                            <option>{clothes}</option>
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label
                            htmlFor='location'
                            className='text-sm font-medium'
                        >
                            Location
                        </label>
                        <select
                            id='location'
                            className='border-current p-2 rounded-md shadow-md text-gray-400'
                        >
                            <option>{place}</option>
                            <option>{place}</option>
                            <option>{place}</option>
                            <option>{place}</option>
                            <option>{place}</option>
                            <option>{place}</option>
                            <option>{place}</option>
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label
                            htmlFor='description'
                            className='text-sm font-medium'
                        >
                            Description
                        </label>
                        <textarea
                            id='description'
                            className='border-current p-2 rounded-md shadow-md text-gray-400 h-24'
                            placeholder='Description'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-sm font-medium my-5'>
                            Upload Photos
                        </label>
                        <label
                            htmlFor='upload-photos'
                            className='text-sm font-semithin p-2 rounded-md shadow-md text-gray-400 h-24 cursor-pointer'
                            onClick={handleUploadClick}
                        >
                            Uploaded Photos
                        </label>
                        <input
                            type='file'
                            id='photos'
                            ref={fileInputRef}
                            className='hidden'
                            onChange={handleFileChange}
                            multiple
                        />
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-wrap -mx-2'>
                            {selectedPhotos.map((photoURL, index) => (
                                <div key={index} className='w-1/3 p-2 relative'>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700'
                                    >
                                        X
                                    </button>
                                    <img
                                        src={photoURL}
                                        alt={`Uploaded Photo ${index + 1}`}
                                        className='max-w-full'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='mr-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md'>
                            Confirm
                        </button>
                        <button className='px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-md'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
