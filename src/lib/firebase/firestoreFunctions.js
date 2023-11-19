import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

/*
* @type userModel {
*    name: string;
*    email: string;
*    phone: string;
*    location: string;
*    profileImage: string;
*    language: string;
}

@type ItemModel {
    title: string;
    categories: string[];
    location: string;
    description: string;
    imagesList: string[];
    updated:date;
    usrId: string;
    userData:{
        name: string;
        profileImage: string;
    }
}
*/

// set user or item
export const setDoc = async (data, collectionStr) => {
    await addDoc(collection(db, collectionStr), {
        // user data or item data
        ...data,
    });
};

//get item
export const getDocData = async (collection, id) => {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return -1;
    }
};
//update doc
export const updateDocData = async (collection, id, updatedData) => {
    const docRef = doc(db, collection, id);
    await updateDoc(docRef, updatedData);
};

//QURIES
// get items by user
export const getItemsByUser = async (userId) => {
    const q = query(collection(db, "items"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        items.push(data);
    });
    return items;
};

export const getItemByCategory = async (category) => {
    const q = query(
        collection(db, "items"),
        where("categories", "==", category),
    );
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        items.push(data);
    });
    return items;
};

// DELETE DOC

export const deleteDocData = async (collection, docId) => {
    return await deleteDoc(doc(db, collection, docId));
};

// GET ALL
export const getAllItems = async () => {
    const q = query(collection(db, "items"), orderBy("createdAt"), limit(15));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        items.push(data);
    });
    return items;
};
