import { useState } from "react";
import { useForm } from "react-hook-form";

import { getAllItems } from "@/lib/firebase/firestoreFunctions";

import Button from "@/components/button/Button";
import CategoryCard from "@/components/categorycard/CategoryCard";
import Input from "@/components/input";
import ItemCard from "@/components/itemcard/ItemCard";
import SearchBar from "@/components/searchbar";

import { categories } from "@/constants";

export default function ProductsPage({ items, queryParams }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const [categoryFilter, setCategoryFilter] = useState(null);
    const [keywordFilter, setKeywordFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    const onSubmit = (data) => {
        setKeywordFilter(data.keyword || "");
        setLocationFilter(data.location || "");
    };

    return (
        <div className='my-32'>
            <div className='my-28'>
                <h2 className='text-3xl font-semibold mb-10'>
                    Browse by category:{" "}
                </h2>
                <div className='flex justify-between'>
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            {...category}
                            onClick={() => setCategoryFilter(category.id)}
                            isActive={category.id === categoryFilter}
                        />
                    ))}
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row justify-start gap-5 items-center'>
                    <SearchBar
                        requiredMessage={false}
                        register={register}
                        errors={errors}
                        validation={{
                            maxLength: {
                                value: 30,
                                message: "30 character max",
                            },
                        }}
                        queryParams={queryParams}
                    />

                    {/* <Input
                        className='w-1/3 -ml-5'
                        name='keyword'
                        type='text'
                        labelText=''
                        placeholder='ex: keyboard'
                        requiredMessage={false}
                        register={register}
                        errors={errors}
                        validation={{
                            maxLength: {
                                value: 30,
                                message: "30 character max",
                            },
                        }}
                    /> */}
                    <Input
                        className='w-1/5 rounded-xl'
                        name='location'
                        type='text'
                        labelText=''
                        placeholder='ex: Oran'
                        requiredMessage={false}
                        register={register}
                        errors={errors}
                        validation={{
                            maxLength: {
                                value: 30,
                                message: "30 character max",
                            },
                        }}
                    />
                    <Button size='lg' type='submit' className='bg-lime-600'>
                        Search
                    </Button>
                    <Button className='border-lime-600 border-2 text-lime-600 bg-transparent'>
                        {" "}
                        Add item
                    </Button>
                </div>
            </form>
            <div className='flex flex-wrap justify-between w-full mt-5'>
                {items
                    .filter((item) => {
                        return (
                            (!categoryFilter ||
                                item.category === categoryFilter) &&
                            (!keywordFilter ||
                                item.name
                                    .toLowerCase()
                                    .includes(keywordFilter.toLowerCase())) &&
                            (!locationFilter ||
                                item.location
                                    .toLowerCase()
                                    .includes(locationFilter.toLowerCase()))
                        );
                    })
                    .map((item) => (
                        <ItemCard key={item.id} {...item} />
                    ))}
            </div>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const queryParams = query;
    let items = await getAllItems("items", queryParams);
    items = JSON.parse(JSON.stringify(items));

    return {
        props: {
            items,
            queryParams,
        },
    };
}
