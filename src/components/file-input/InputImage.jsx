/* eslint-disable @next/next/no-img-element */
import { BsImage } from "react-icons/bs";

function InputImage({ imgSrc, showImage }) {
    return (
        <div className='relative w-32 h-32 rounded-lg bg-slate-300 flex items-center justify-center'>
            <BsImage className='text-5xl text-green' />
            {showImage && (
                <img
                    src={imgSrc}
                    alt='uploaded '
                    className='w-full h-full object-cover absolute top-0 left-0 rounded-lg'
                />
            )}
        </div>
    );
}

export default InputImage;
