import Link from "next/link";

const CategoryCard = ({ imgSrc, title, href }) => {
    return (
        <Link href={href}>
            <div className=' w-36 group transition-all duration-300 hover:-translate-y-3'>
                <div className='w-36 h-36 border border-white rounded-lg bg-lime-100 shadow-lg '>
                    <img
                        className='rounded-lg object-cover w-full h-full'
                        src={imgSrc}
                        alt={title}
                    />
                </div>
                <p className='text-lime-800 text-lg text-center mt-4 font-medium group-hover:text-lime-400'>
                    {title}
                </p>
            </div>
        </Link>
    );
};

export default CategoryCard;
