import Image from "next/image";

const CategoryCard = ({title, image, category}) => {
    return (
        <div className='max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden h-36 w-36 '>
            {/* <Image
                className='h-36 w-36 object-cover'
                src={image}
                alt={title}
            /> */}
            <div className='px-6 py-4 text-center'>
                <div className='text-lg mb-2 mt-20'>{category}</div>
            </div>
        </div>
    );
};

export default CategoryCard;
