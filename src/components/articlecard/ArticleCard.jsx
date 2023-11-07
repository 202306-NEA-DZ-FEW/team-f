import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button/Button";
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
        <div className='my-8 h-fit brd  flex flex-col w-full  px-8 py-5 gap-4 md:flex-row md:gap-10 md:my-16  md:items-center  lg:w-[90%] mx-auto'>
            <div className='w-full md:w-1/2 h-[20rem]'>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={400}
                    className='object-cover rounded-lg h-full w-full'
                />
            </div>
            <div
                className={`${textOnleft ? "md:order-first" : ""}
                flex flex-col gap-6 text-center items-center md:text-left md:items-start md:w-1/2 `}
            >
                <h1 className='text-2xl text-black font-semibold'>{title}</h1>
                <p className='text-black md:w-6/7'>{description}</p>
                <Button href={articleUrl}>Read more</Button>
            </div>
        </div>
    );
};

export default ArticleCard;
