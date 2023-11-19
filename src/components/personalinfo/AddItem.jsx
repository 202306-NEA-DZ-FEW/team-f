import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";

const AddItem = () => {
    return (
        <div className='flex flex-col  items-center m-8 gap-10 hover:scale-105 transition duration-500 '>
            <div className='lg:w-9/12 w-80 h-16 flex gap-4 pl-2 items-center bg-lime-600 bg-opacity-5 rounded-3xl border-x border-lime-400'>
                <Image
                    width={500}
                    height={600}
                    className='w-12 my-3 h-12 rounded-full'
                    src='/images/2.png'
                    alt='product'
                />
                <p className='text-xl my-5'>Product title</p>
                <div className='pl-14 lg:pl-96'>
                    <button className='lg:pl-64'>
                        {" "}
                        <FiEdit3 className='text-lime-600' />
                    </button>
                    <button className='pl-2'>
                        {" "}
                        <AiTwotoneDelete className='text-orange-700' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
