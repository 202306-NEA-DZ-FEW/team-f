import Button from "@/components/button/Button";
import React, { useState, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Index() {
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [deleteIndices, setDeleteIndices] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const photoURLs = [...selectedPhotos];

        for (let i = 0; i < files.length; i++) {
            const photoURL = URL.createObjectURL(files[i]);
            photoURLs.push(photoURL);
        }

        setSelectedPhotos(photoURLs);
    };

    const handleDelete = (index) => {
        const updatedPhotos = [...selectedPhotos];
        updatedPhotos.splice(index, 1);
        setSelectedPhotos(updatedPhotos);
        setDeleteIndices([...deleteIndices, index]);
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-md'>
                <h1 className='text-3xl font-semibold mb-3 text-center'>
                    Add an Item
                </h1>
                <form className='space-y-4'>
                    <div className='flex flex-col'>
                        <label htmlFor='title' className='text-sm font-medium'>
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            className='border-current p-2 rounded-md shadow-md text-gray-400'
                            placeholder='Title'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label
                            htmlFor='category'
                            className='text-sm font-medium'
                        >
                            Category
                        </label>
                        <select
                            id='category'
                            className='border-current p-2 rounded-md shadow-md text-gray-400'
                        >
                            <option>Electronics</option>
                            <option>Academic</option>
                            <option>clothes</option>
                            <option>Dorm</option>
                            <option>Entertainment</option>
                            <option>Beauty</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='State' className='text-sm font-medium'>
                            State
                        </label>
                        <select
                            id='State'
                            className='border-current p-2 rounded-md shadow-md text-gray-400'
                        >
                            <option value='0001'>ADRAR</option>
                            <option value='0046'>AIN TEMOUCHENT</option>
                            <option value='0044'>AIN-DEFLA</option>
                            <option value='0016'>ALGER</option>
                            <option value='0023'>ANNABA</option>
                            <option value='0034'>B.B. ARRERIDJ</option>
                            <option value='0005'>BATNA</option>
                            <option value='0008'>BECHAR</option>
                            <option value='0006'>BEJAIA</option>
                            <option value='0007'>BISKRA</option>
                            <option value='0009'>BLIDA</option>
                            <option value='0010'>BOUIRA</option>
                            <option value='0035'>BOUMERDES</option>
                            <option value='0002'>CHLEF</option>
                            <option value='0025'>CONSTANTINE</option>
                            <option value='0017'>DJELFA</option>
                            <option value='0032'>EL BAYADH</option>
                            <option value='0036'>EL TARF</option>
                            <option value='0039'>EL-OUED</option>
                            <option value='0047'>GHARDAIA</option>
                            <option value='0024'>GUELMA</option>
                            <option value='0033'>ILLIZI</option>
                            <option value='0018'>JIJEL</option>
                            <option value='0040'>KHENCHELA</option>
                            <option value='0003'>LAGHOUAT</option>
                            <option value='0029'>MASCARA</option>
                            <option value='0026'>MEDEA</option>
                            <option value='0043'>MILA</option>
                            <option value='0027'>MOSTAGANEM</option>
                            <option value='0028'>M&lsquo;SILA</option>
                            <option value='0045'>NAAMA</option>
                            <option value='0031'>ORAN</option>
                            <option value='0030'>OUARGLA</option>
                            <option value='0004'>OUM EL BOUAGHI</option>
                            <option value='0048'>RELIZANE</option>
                            <option value='0020'>SAIDA</option>
                            <option value='0019'>SETIF</option>
                            <option value='0022'>SIDI BEL-ABBES</option>
                            <option value='0021'>SKIKDA</option>
                            <option value='0041'>SOUK AHRAS</option>
                            <option value='0011'>TAMANRASSET</option>
                            <option value='0012'>TEBESSA</option>
                            <option value='0014'>TIARET</option>
                            <option value='0037'>TINDOUF</option>
                            <option value='0042'>TIPAZA</option>
                            <option value='0038'>TISSEMSILT</option>
                            <option value='0015'>TIZI-OUZOU</option>
                            <option value='0013'>TLEMCEN</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='description'
                            className='text-sm font-medium'
                        >
                            City
                        </label>
                        <textarea
                            id='description'
                            className='border-current p-2 rounded-md shadow-md text-gray-400 h-10'
                            minLength={3}
                            maxLength={15}
                            placeholder='Description'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label
                            htmlFor='description'
                            className='text-sm font-medium'
                        >
                            Description
                        </label>
                        <textarea
                            id='description'
                            className='border-current p-2 rounded-md shadow-md text-gray-400 h-24'
                            placeholder='Description'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label
                            htmlFor='upload-photos'
                            className='text-lg font-semithin p-2 text-black-100 h-10 cursor-pointer'
                            onClick={handleUploadClick}
                        >
                            Upload Photos
                        </label>
                        <input
                            type='file'
                            id='photos'
                            ref={fileInputRef}
                            className='hidden'
                            onChange={handleFileChange}
                            multiple
                        />
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-wrap -mx-2'>
                            {selectedPhotos.map((photoURL, index) => (
                                <div key={index} className='w-1/3 p-2 relative'>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700'
                                    >
                                        X
                                    </button>
                                    <img
                                        src={photoURL}
                                        alt={`Uploaded Photo ${index + 1}`}
                                        className='max-w-full'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Button className='mr-2' variant='default' size='lg'>
                            Confirm
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
