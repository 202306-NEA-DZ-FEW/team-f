import Link from "next/link";

import CategoryCard from "@/components/categorycard/CategoryCard";
import Footer from "@/components/footer/Footer";
import ItemCard from "@/components/itemcard/ItemCard";
import Navbar from "@/components/navbar/Navbar";


//hey you need to run the server of the fake api (json-server --watch --port 4000 ./_data/db.json) in order for this page to work,
// also fontawesome won't work for some reason and the advanced search still needs to be reviewed in order to be merged. if u click on the click me it will take u to another page yay.
// I made a couple of tweaks to the itemcard and category so it could look descent.

export default function Information({ id, items }) {
    return (
        <div>
            <Navbar />
            <Link href={`listed-items/${id}`}>
                <h1>Click Me</h1>
            </Link>
            <div className='flex flex-row m-6 gap-12 justify-center items-center'>
                {items.map((item) => (
                    <div key={item.id}>
                        <CategoryCard category={item.category} />
                    </div>
                ))}
            </div>
            <div className='flex flex-row gap-6 justify-center items-center'>
                {items.map((thing) => (
                    <div key={thing.id}>
                        <ItemCard
                            location={thing.location}
                            title={thing.title}
                            description={thing.description}
                        />
                        <ItemCard
                            location={thing.location}
                            title={thing.title}
                            description={thing.description}
                        />
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    try {
        const response = await fetch("http://localhost:4000/items");
        const items = await response.json();

        if (!items) {
            console.error("Items not found.");
            return {
                notFound: true,
            };
        }
        return {
            props: { items },
        };
    } catch (error) {
        console.error("Error fetching items:", error);
        return {
            notFound: true,
        };
    }
}
