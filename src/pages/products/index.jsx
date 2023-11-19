import { useForm } from "react-hook-form";

import { getAllItems } from "@/lib/firebase/firestoreFunctions";

import Button from "@/components/button/Button";
import CategoryCard from "@/components/categorycard/CategoryCard";
import Input from "@/components/input";
import ItemCard from "@/components/itemcard/ItemCard";

import { categories } from "@/constants";

export default function ProductsPage({ items }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    return (
        <div className='my-32'>
            <div className='my-28'>
                <h2 className='text-3xl font-semibold mb-10'>
                    Browse by category:{" "}
                </h2>
                <div className='flex justify-between'>
                    {categories.map((category) => {
                        return <CategoryCard key={category.id} {...category} />;
                    })}
                </div>
            </div>
            <div className='flex flex-row justify-start gap-5 items-center'>
                <Input
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
                />
                <Input
                    className='w-1/5'
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
                <Button size='lg'> Search</Button>
                <Button variant='outlineSecondary'> Add item</Button>
            </div>
            <div className='flex flex-wrap justify-between w-full mt-5'>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    let items = await getAllItems();
    items = JSON.parse(JSON.stringify(items));
    return {
        props: {
            items,
        },
    };
}
