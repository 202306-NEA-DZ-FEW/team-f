import {
    getDocData,
    getItemByCategory,
} from "@/lib/firebase/firestoreFunctions";

import ItemCard from "@/components/itemcard/ItemCard";
import SingleItemCard from "@/components/singleitemcard/SingleItemCard";

function ItemPage({ item, otherItems }) {
    // otherItems = [otherItems[0], otherItems[1], otherItems[0], otherItems[1]];
    const {
        title,
        description,
        updatedAt,
        categories,
        imagesList,
        location,
        userData,
        userId,
    } = item;
    return (
        <>
            <SingleItemCard
                images={imagesList}
                title={title}
                description={description}
                location={location}
                name={userData.name}
                phone={userData.phone}
                email={userData.email}
            />
            <div className='mt-12 border-t border-slate-300'>
                <h2 className='text-4xl font-semi my-4'>Related items</h2>
                <div className='flex flex-wrap gap-5 justify-start '>
                    {otherItems.map((element) => (
                        <ItemCard item={element} key={element.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    let item = await getDocData("items", params.id);
    item = JSON.parse(JSON.stringify(item));

    let otherItems = await getItemByCategory(item.categories);
    otherItems = JSON.parse(JSON.stringify(otherItems));

    return {
        props: {
            item,
            otherItems,
        },

        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const paths = [{ params: { id: "" } }];
    return { paths, fallback: "blocking" };
}

export default ItemPage;
