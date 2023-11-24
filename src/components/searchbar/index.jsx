import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDebounce } from "use-debounce";

function SearchBar({ queryParams }) {
    const router = useRouter();
    const [text, setText] = useState("");
    let [query] = useDebounce(text, 600);

    useEffect(() => {
        const newQueryParams = { ...queryParams };
        if (query) {
            newQueryParams.search = query;
        } else {
            delete newQueryParams.search;
        }

        const currentURL = router.query.search || "";

        if (query !== currentURL) {
            router.push(
                {
                    pathname: `/products`,
                    query: newQueryParams,
                },
                undefined,
                { scroll: false },
            );
        }
    }, [query, queryParams, router]);

    useEffect(() => {
        // Update the text input when queryParams change
        setText(queryParams.search || "");
    }, [queryParams.search]);

    return (
        <div className='md:max-w-xs relative'>
            <RiSearch2Line className='absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-600' />
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type='text'
                placeholder='ex: keyboard'
                className='input-sm text-center rounded-xl input-bordered w-full md:max-w-xs border-zinc-300 border h-11 '
            />
        </div>
    );
}

export default SearchBar;
