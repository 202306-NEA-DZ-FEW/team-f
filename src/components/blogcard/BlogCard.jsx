const BlogCard = ({ blog }) => {
    return (
        <div
            data-testid='blog-card'
            className='bg-white shadow-md rounded-xl ml-2 mr-2 mb-2 mt-2 px-2 py-2 verflow-hidden'
        >
            <div className='relative '>
                <div className='bg-green-500 text-white absolute bottom-0 left-0 py-0 px-0 rounded-tr-lg'>
                    <p className='text-sm bg-green ml-0 px-3 py-2'>
                        {blog.date}
                    </p>
                </div>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className='w-full h-48 object-cover rounded-xl'
                />
            </div>
            <div className='p-6'>
                <h3 className='text-2xl text-center font-semibold text-gray-800 mb-2 '>
                    {blog.title}
                </h3>
                <p className='text-gray-700 text-center'>{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
