import Image from "next/image";

const AddItem = ({produt, title}) => {
    return (
        <div className='flex flex-col justify-center items-center m-8 gap-10'>
            <span className='text-2xl text-zinc-700 font-bold'>My items</span>
            <div className='lg:w-9/12 w-80 h-16 flex gap-4 text-center bg-neutral-100 rounded-3xl'>
                <Image
                    width={500}
                    height={500}
                    className='w-20 my-3 h-12 rounded-2xl'
                    src='1.png'
                    alt='product'
                />
                <p className='text-xl my-5'>{produt} {title}</p>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};

export default AddItem;
