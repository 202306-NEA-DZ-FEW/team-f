import { useState } from "react";

import { deleteDocData } from "@/lib/firebase/firestoreFunctions";

import Button from "../button/Button";

export default function DeleteWarning({
    setDeleteWarningItem,
    deleteWarningItem,
    setItems,
    items,
}) {
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = async () => {
        setIsLoading(true);
        await deleteDocData("items", deleteWarningItem);
        setItems(items.filter((item) => item.id !== deleteWarningItem));
        setDeleteWarningItem(false);
        setIsLoading(false);
    };
    return (
        <div className='fixed w-full h-full inset-0 z-40 flex justify-center items-center overflow-hidden  transition-opacity'>
            <div className='absolute  w-full h-full bg-[black] opacity-80 right-0 top-0'></div>
            <div className='relative text-white  py-12 px-16 bg-[#00000059]  rounded-lg z-60 shadow-xl border border-slate-200 '>
                <p> Do you want to delete this item?</p>
                <div className='flex gap-9 mt-10 w-full justify-center'>
                    <Button
                        className={`${isLoading ? "bg-slate-300 " : "bg-red"}`}
                        onClick={handleDelete}
                        disabled={isLoading}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={() => setDeleteWarningItem(false)}
                        variant='outlinePrimary'
                        className={`${isLoading ? "bg-slate-300 " : ""}`}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}
