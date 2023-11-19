import clsx from "clsx";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import InputImage from "./InputImage";

const FileInput = ({ files, setFiles, register, errors, clearErrors }) => {
    const [input, setInput] = useState(false);

    const handleChange = async (e) => {
        e.preventDefault();
        clearErrors("image");
        setFiles(Array.from(e.target.files));
        setInput(true);
    };
    return (
        <div
            className={clsx(
                "relative flex justify-center mx-auto items-center rounded-lg  border-dashed border-2  w-full lg:w-4/5 h-[20rem] my-10 cursor-pointer hover:bg-slate-100",
                { "border-black": !errors.image, "border-red": errors.image },
            )}
        >
            <input
                {...register("image", {
                    required: files
                        ? false
                        : "Add at least one image to continue",
                })}
                type='file'
                className='w-full h-full absolute top-0 left-0 brd opacity-0 cursor-pointer'
                onChange={handleChange}
                accept='image/*'
                multiple
            />
            {input || files ? (
                <div className='flex flex-wrap w-full h-full  gap-4 p-8'>
                    {files &&
                        files.map((file) => (
                            <InputImage
                                key={
                                    typeof file === "string" ? file : file.name
                                }
                                imgSrc={
                                    typeof file === "string" && !input
                                        ? file
                                        : URL.createObjectURL(file)
                                }
                                showImage={true}
                            />
                        ))}
                </div>
            ) : (
                <div className='flex flex-col gap-3 text-black text-center items-center'>
                    <AiOutlineCloudUpload className='text-5xl text-green ' />
                    <h3>
                        <b>Click to upload images</b> or drag and drop
                    </h3>
                    <p className='text-sm'>Up to 5 images</p>
                </div>
            )}
            {errors.image && (
                <span className='text-red absolute -bottom-6 left-0'>
                    {errors.image.message}
                </span>
            )}
        </div>
    );
};

export default FileInput;
