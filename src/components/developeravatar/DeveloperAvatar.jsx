import Image from "next/image";
import Link from "next/link";

const DeveloperAvatar = ({ name, avatarUrl, description, href }) => {
    return (
        <Link href={href}>
            <div className=' text-center group-hover:scale-[10] flex flex-col items-center cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl justify-center w-full md:w-80 rounded-3xl p-4 hover:bg-slate-100'>
                <div className='relative w-32 h-32 md:w-20 md:h-20 lg:w-36 lg:h-36 mb-2 mx-auto '>
                    <Image
                        src={avatarUrl}
                        alt={`${name}'s Avatar`}
                        className='rounded-full'
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <p className='text-xl text-lime-800 font-semibold my-2'>
                    {name}
                </p>
                <p className='text-black text-base w-4/5 md:w-full '>
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default DeveloperAvatar;
