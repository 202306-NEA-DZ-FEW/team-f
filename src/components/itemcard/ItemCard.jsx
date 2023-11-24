// ItemCard Component
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

const ItemCard = ({ item }) => {
    const { id, title, description, location, imagesList } = item;

    return (
        <Link href={`/item/${id}`} passHref>
            <a className='cursor-pointer'>
                <div className='flex flex-col m-2 border border-gray my-4 w-full md:w-[18rem] h-fit shadow-lg rounded-xl p-1'>
                    <div className='w-full h-[13rem] mb-4'>
                        <img
                            src={imagesList[0]}
                            alt={title}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start text-black px-2'>
                        <h2 className='text-2xl font-bold '>
                            {title.slice(0, 18) +
                                `${title.length > 18 ? "..." : ""}`}
                        </h2>
                        <p className='w-full h-[4rem]'>
                            {description.slice(0, 80) + "..."}
                        </p>
                        <div className='flex items-center my-2 self-end h-16'>
                            <MdLocationPin className='text-red text-3xl' />
                            <p className='text-md font-semibold '>{location}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ItemCard;
