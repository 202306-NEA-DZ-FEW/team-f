import CategoryCard from "@/components/categorycard/CategoryCard";

import { categories } from "@/constants";

export default function ProductsPage() {
    return (
        <div className='my-32 flex justify-between'>
            {categories.map((category) => {
                return <CategoryCard key={category.id} {...category} />;
            })}
        </div>
    );
}
