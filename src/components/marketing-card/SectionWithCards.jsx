const SectionWithCards = ({ children, SectionTitle }) => {
    return (
        <section className='bg-gray-100 p-8 w-5/6 mx-auto text-center my-6'>
            <h2 className='text-2xl font-bold mb-8'>{SectionTitle}</h2>
            <div className='flex flex-wrap mx-2'>{children}</div>
        </section>
    );
};

export default SectionWithCards;
