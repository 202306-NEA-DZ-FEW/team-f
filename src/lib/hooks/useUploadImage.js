import {
    getDownloadURL,
    ref,
    StorageError,
    StorageReference,
    uploadBytesResumable,
    UploadMetadata,
    UploadResult,
    UploadTaskSnapshot,
} from "firebase/storage";
import { useCallback, useState } from "react";

import { storage } from "@/lib/firebase/firebase";

const UseUploadImage = () => {
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [snapshot, setSnapshot] = useState();

    const uploadFile = useCallback(async (data, metadata = "") => {
        const storageRef = ref(storage, `images/${data.name}`);
        return new Promise((resolve) => {
            setUploading(true);
            setError(undefined);
            const uploadTask = uploadBytesResumable(storageRef, data, metadata);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setSnapshot(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                    );
                },
                (error) => {
                    setUploading(false);
                    setError(error);
                    resolve(undefined);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            resolve(downloadURL);
                        },
                    );
                },
            );
        });
    }, []);

    return [uploadFile, uploading, snapshot, error];
};
export default UseUploadImage;
