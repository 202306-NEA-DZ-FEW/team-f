import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
    return (
        <div className='hidden:w-3/6 bg-white flex flex-col shadow-lg rounded-2xl mt-4 h-60 overflow-y-auto'>
            {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
            })}
        </div>
    );
};

export default SearchResultsList;
