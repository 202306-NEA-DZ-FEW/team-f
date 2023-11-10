import Link from "next/link";

const CategoryCard = ({ imgSrc, title, href }) => {
    return (
        <Link href={href}>
            <div className='h-fit w-36 group'>
                <div className='w-36 h-36 border border-slate-300 rounded-lg bg-slate-100 shadow-lg '>
                    <img
                        className='rounded-lg object-cover w-full h-full'
                        src={imgSrc}
                        alt={title}
                    />
                </div>
                <p className='text-black text-lg text-center mt-4 font-medium group-hover:text-green'>
                    {title}
                </p>
            </div>
        </Link>
    );
};

export default CategoryCard;
