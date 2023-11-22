import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router"; // Import useRouter
import { getItemsByUser } from "@/lib/firebase/firestoreFunctions";
import DeleteWarning from "@/components/delete-warning";
import ItemCard from "@/components/itemcard/ItemCard";
import Profile from "@/components/profile/Profile";
import { useAuth } from "@/context/AuthContext";

export default function MyAccount() {
    const { currentUser } = useAuth();
    const [items, setItems] = useState([]);
    const [deleteWarningItem, setDeleteWarningItem] = useState();
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        // Check if the user is not logged in and redirect to 404 page
        if (!currentUser) {
            router.push("/");
            return; // Stop further execution of the useEffect
        }

        // Fetch items only if the user is logged in
        getItemsByUser(currentUser.uid).then((data) => {
            setItems(data);
        });
    }, [currentUser, router]);

    return (
        <>
            {deleteWarningItem && (
                <DeleteWarning
                    setDeleteWarningItem={setDeleteWarningItem}
                    deleteWarningItem={deleteWarningItem}
                    setItems={setItems}
                    items={items}
                />
            )}
            <Profile />
            <div className='mt-5 w-full py-5 '>
                <h2 className='text-2xl mb-5 text-black font-medium'>
                    My Items:
                </h2>

                <div className='flex flex-wrap gap-6'>
                    {items.map((item) => (
                        <div
                            className='relative flex justify-end group'
                            key={item.id}
                        >
                            <div className='transition hidden absolute top-5 gap-8 py-1 px-2 self-end group-hover:flex bg-white rounded-lg '>
                                <AiOutlineDelete
                                    onClick={() =>
                                        setDeleteWarningItem(item.id)
                                    }
                                    className='text-red text-3xl cursor-pointer'
                                />
                                <Link
                                    href={{
                                        pathname: "/add-item",
                                        query: item,
                                    }}
                                >
                                    <AiOutlineEdit className='text-black text-3xl cursor-pointer' />
                                </Link>
                            </div>
                            <ItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
