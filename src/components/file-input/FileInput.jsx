import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import InputImage from "./InputImage";

const FileInput = ({ files, setFiles }) => {
    const [input, setInput] = useState(false);

    const handleChange = async (e) => {
        e.preventDefault();
        setFiles(Array.from(e.target.files));
        setInput(true);
    };

    return (
        <div className='relative flex justify-center items-center rounded-lg  border-dashed border-2 border-black w-full h-[20rem] my-10 cursor-pointer hover:bg-slate-100'>
            <input
                type='file'
                className='w-full h-full absolute top-0 left-0 brd opacity-0 cursor-pointer'
                onChange={handleChange}
                accept='image/*'
                multiple
            />
            {input ? (
                <div className='flex flex-wrap w-full h-full  gap-4 p-8'>
                    {files &&
                        files.map((file) => (
                            <InputImage
                                key={file.name}
                                imgSrc={URL.createObjectURL(file)}
                            />
                        ))}
                </div>
            ) : (
                <div className='flex flex-col gap-3 text-black text-center items-center'>
                    <AiOutlineCloudUpload className='text-5xl text-green ' />
                    <h3>
                        <b>Click to upload</b> or drag and drop
                    </h3>
                    <p className='text-sm'>Up to 5 images</p>
                </div>
            )}
        </div>
    );
};

export default FileInput;
