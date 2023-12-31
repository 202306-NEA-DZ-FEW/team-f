import { clsx } from "clsx";
import { serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { dbAddDoc, updateDocData } from "@/lib/firebase/firestoreFunctions";
import UseUploadImage from "@/lib/hooks/useUploadImage";

import Button from "@/components/button/Button";
import FileInput from "@/components/file-input/FileInput";

import { useAuth } from "@/context/AuthContext";

function AddItemPage() {
    const { currentUser } = useAuth();
    const router = useRouter();
    const [files, setFiles] = useState();
    const [uploadFile] = UseUploadImage();
    const itemQueryData = router.query;
    const updateItemPageMode = Object.keys(itemQueryData).length !== 0;
    let inputDefaultValues = {};
    if (updateItemPageMode) {
        inputDefaultValues = {
            itemName: itemQueryData.title,
            category: itemQueryData.categories,
            description: itemQueryData.description,
            location: itemQueryData.location,
        };
        if (typeof itemQueryData.imagesList === "string") {
            itemQueryData.imagesList = [itemQueryData.imagesList];
        }
    }
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        clearErrors,
    } = useForm({
        defaultValues: inputDefaultValues,
    });

    const submitItem = async (data) => {
        const uploadPromises = files.map(async (file) => {
            return await uploadFile(file);
        });

        const downloadUrls = await Promise.all(uploadPromises);

        const itemData = {
            title: data.itemName,
            categories: data.category,
            description: data.description,
            location: data.location,
            imagesList: downloadUrls,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            userId: currentUser.uid,
            userData: {
                name: currentUser.displayName,
                profileImage: currentUser.photoURL,
            },
        };
        await dbAddDoc(itemData, "items");
        reset();
    };
    const updateItem = async (data) => {
        let downloadUrls;
        if (files) {
            const uploadPromises = files.map(async (file) => {
                return await uploadFile(file);
            });
            downloadUrls = await Promise.all(uploadPromises);
        }
        const itemData = {
            title: data.itemName,
            categories: data.category,
            description: data.description,
            location: data.location,
            imagesList: downloadUrls ? downloadUrls : itemQueryData.imagesList,
            updatedAt: serverTimestamp(),
        };
        await updateDocData("items", itemQueryData.id, itemData);
        router.push(`/item/${itemQueryData.id}`);
    };

    useEffect(() => {
        // Check if the user is not logged in and redirect to 404 page
        if (!currentUser) {
            router.push("/auth/signin");
            return; // Stop further execution of the useEffect
        }

        // Fetch items only if the user is logged in
    }, [currentUser]);
    return (
        <div className='mb-28'>
            <h1 className='text-center text-3xl font-semibold mt-16 mb-10 text-black'>
                {updateItemPageMode ? "Update Item" : "Add new Item"}
            </h1>
            <form className='flex flex-col w-[80%] lg:w-[60%] mx-auto text-black'>
                <div className='mb-4'>
                    <FileInput
                        files={
                            updateItemPageMode && !files
                                ? itemQueryData.imagesList
                                : files
                        }
                        setFiles={setFiles}
                        register={register}
                        errors={errors}
                        clearErrors={clearErrors}
                    />
                    <label
                        htmlFor='item-name'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Item Name
                    </label>
                    <input
                        type='text'
                        id='item-name'
                        {...register("itemName", {
                            // required: false,
                            required: "item name is Required",
                            maxLength: 50,
                            minLength: {
                                value: 2,
                                message:
                                    "item name must be at least 2 characters",
                            },
                        })}
                        placeholder='Ex: Math Book'
                        className={clsx(
                            "mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green",
                            {
                                "border-red": errors.itemName,
                                "border-slate-300": !errors.itemName,
                            },
                        )}
                    />
                    {errors.itemName && (
                        <span className='text-red'>
                            {errors.itemName.message}
                        </span>
                    )}
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='category'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Category
                    </label>
                    <select
                        {...register("category", {
                            required: "Select a category",
                        })}
                        id='category'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    >
                        <option value='' defaultValue disabled>
                            Select category
                        </option>
                        <option value='electronics'>Electronics</option>
                        <option value='academic'>Academic</option>
                        <option value='clothes'>Clothes</option>
                        <option value='dorm'>Dorm</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='beauty'>Beauty</option>
                        <option value='other'>Other</option>
                    </select>
                    {errors.category && (
                        <span className='text-red'>
                            {errors.category.message}
                        </span>
                    )}
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor='category'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Item Listing
                    </label>
                    <select
                        {...register("category", {
                            required: "Select a category",
                        })}
                        id='category'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    >
                        <option value='' defaultValue disabled>
                            Select Listing
                        </option>
                        <option value='price'>Price</option>
                        <option value='donate'>Donate</option>
                        <option value='exchange'>Exchange </option>
                    </select>
                    {errors.category && (
                        <span className='text-red'>
                            {errors.category.message}
                        </span>
                    )}
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='location'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Location
                    </label>
                    <input
                        {...register("location", {
                            // required: false,
                            required: "Add a location ",
                            maxLength: 50,
                            minLength: {
                                value: 4,
                                message:
                                    "Location must be at least 4 characters",
                            },
                        })}
                        type='text'
                        id='location'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    />
                    {errors.location && (
                        <span className='text-red'>
                            {errors.location.message}
                        </span>
                    )}
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='description'
                        className='block text-sm font-medium text-slate-700'
                    >
                        Description
                    </label>
                    <textarea
                        {...register("description")}
                        id='description'
                        rows='3'
                        className='mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green'
                    ></textarea>
                </div>

                <Button
                    onClick={
                        updateItemPageMode
                            ? handleSubmit(updateItem)
                            : handleSubmit(submitItem)
                    }
                    variant='default'
                    size='lg'
                    className={clsx("mt-10 mx-auto", {
                        "cursor-not-allowed bg-slate-300": isSubmitting,
                        "bg-green": !isSubmitting,
                    })}
                    disabled={isSubmitting}
                >
                    {updateItemPageMode ? "Update item" : "Add new item"}
                </Button>
            </form>
        </div>
    );
}

export default AddItemPage;
