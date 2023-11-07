const SearchResult = ({ result }) => {
    return (
        <div
            className='p-1 search-result'
            onClick={(e) => alert(`you clicked on ${result.name}`)}
        >
            {result.name}
        </div>
    );
};

export default SearchResult;
