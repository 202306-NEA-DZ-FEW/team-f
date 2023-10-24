import Image from "next/image";
import Link from "next/link";

/*
textOnleft prop: is the order of content and image in the design. 
In the card, we have content on the left and image on the right, and the reverse order in the following card.

*/

const ArticleCard = ({
    title,
    description,
    imageUrl,
    articleUrl = "",
    textOnleft = false,
}) => {
    return (
        <div className='my-8 flex flex-col w-full  px-8 py-5 gap-4 md:flex-row md:gap-10 md:my-16  md:items-center  lg:w-[90%] mx-auto'>
            <div className='w-full md:w-1/2'>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={500}
                    className='object-cover rounded-lg'
                />
            </div>
            <div
                className={`${textOnleft ? "md:order-first" : ""}
                flex flex-col gap-6 text-center items-center md:text-left md:items-start md:w-1/2 `}
            >
                <h1 className='text-2xl text-black font-semibold'>{title}</h1>
                <p className='text-black md:w-3/4'>{description}</p>
                <Link
                    href={articleUrl}
                    className='bg-green px-4 py-2 text-white rounded-lg cursor-pointer w-1/2 md:w-fit md:px-6'
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
