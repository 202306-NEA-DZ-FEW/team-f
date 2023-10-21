const Card = ({ icon, title, children }) => {
    return (
        <div className='p-4 mb-4 w-full sm:w-1/3 lg:w-1/3 flex justify-center item-center'>
            <div className='text-center flex flex-col items-center'>
                <div className='pb-4 '>{icon}</div>
                <h3 className='p-2 font-bold'>{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default Card;
