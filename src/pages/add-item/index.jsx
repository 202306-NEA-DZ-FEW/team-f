import { useState } from "react";

import UseUploadImage from "@/lib/hooks/useUploadImage";

import FileInput from "@/components/file-input/FileInput";

function AddItemPage() {
    const [files, setFiles] = useState([]);
    const [uploadFile, uploading, snapshot, imageUrl, error] = UseUploadImage();

    const handleUpload = () => {
        files.map((file) => {
            uploadFile(file);
        });
    };
    console.log(uploading);
    console.log(imageUrl);
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold mt-16 mb-10 text-black'>
                Add new Item
            </h1>
            <form className='flex flex-col w-[80%] lg:w-[60%] mx-auto text-black'>
                <div className='mb-4'>
                    <label
                        for='item-name'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Item Name
                    </label>
                    <input
                        type='text'
                        id='item-name'
                        name='item-name'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        for='category'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Category
                    </label>
                    <select
                        id='category'
                        name='category'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    >
                        <option value='category1'>Category 1</option>
                        <option value='category2'>Category 2</option>
                        <option value='category3'>Category 3</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <label
                        for='location'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Location
                    </label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        for='description'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Description
                    </label>
                    <textarea
                        id='description'
                        name='description'
                        rows='3'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    ></textarea>
                </div>

                <FileInput files={files} setFiles={setFiles} />
                <button
                    onClick={handleUpload}
                    className='bg-green text-white border rounded-2xl w-40 py-2.5 font-semibold'
                >
                    upload
                </button>
            </form>
        </div>
    );
}

export default AddItemPage;
