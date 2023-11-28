import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getAllItems } from "@/lib/firebase/firestoreFunctions";

import Button from "@/components/button/Button";
import CategoryCard from "@/components/categorycard/CategoryCard";
import Input from "@/components/input";
import ItemCard from "@/components/itemcard/ItemCard";
import SearchBar from "@/components/searchbar";

import { categories } from "@/constants";

export default function ProductsPage() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    const [categoryFilter, setCategoryFilter] = useState(null);
    const [keywordFilter, setKeywordFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const onSubmit = (data) => {
        setKeywordFilter(data.keyword || "");
        setLocationFilter(data.location || "");
    };

    useEffect(() => {
        async function getItems() {
            let items = await getAllItems("items");
            setItems(items);
        }
        getItems();
    }, []);

    useEffect(() => {
        // Function to filter items based on category, keyword, and location
        const filterItems = () => {
            const filtered = items.filter((item) => {
                return (
                    (!categoryFilter || item.category === categoryFilter) &&
                    (!keywordFilter ||
                        (item.name &&
                            item.name
                                .toLowerCase()
                                .includes(keywordFilter.toLowerCase())) ||
                        (item.description &&
                            item.description
                                .toLowerCase()
                                .includes(keywordFilter.toLowerCase()))) &&
                    (!locationFilter ||
                        (item.location &&
                            item.location
                                .toLowerCase()
                                .includes(locationFilter.toLowerCase())))
                );
            });
            setFilteredItems(filtered);
        };

        filterItems();
    }, [items, categoryFilter, keywordFilter, locationFilter]);

    const handleKeywordChange = (value) => {
        setKeywordFilter(value);
        setValue("keyword", value);
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
                    <Input
                        className='w-1/3 -ml-5'
                        name='keyword'
                        type='text'
                        labelText=''
                        placeholder='Search by name or description'
                        requiredMessage={false}
                        register={register}
                        onChange={(e) => handleKeywordChange(e.target.value)}
                        value={keywordFilter}
                        errors={errors}
                        validation={{
                            maxLength: {
                                value: 15,
                                message: "15 character max",
                            },
                        }}
                    />
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
                    <Button
                        href='/add-item'
                        className='border-lime-600 border-2 text-lime-600 bg-transparent'
                    >
                        Add item
                    </Button>
                </div>
            </form>
            <div className='flex flex-wrap justify-between w-full mt-5'>
                {filteredItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
