import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const SearchLocation = ({ setResults }) => {
    const [input, setInput] = useState("");

    const locationStates = [
        "Adrar",
        "Ain Defla",
        "Ain Temouchent",
        "Algiers",
        "Annaba",
        "Batna",
        "Bechar",
        "Bejaia",
        "Biskra",
        "Blida",
        "Bordj Bou Arreridj",
        "Bouira",
        "Boumerdes",
        "Chlef",
        "Constantine",
        "Djelfa",
        "El Bayadh",
        "El Oued",
        "El Tarf",
        "Ghardaia",
        "Guelma",
        "Illizi",
        "Jijel",
        "Khenchela",
        "Laghouat",
        "M'Sila",
        "Mascara",
        "Medea",
        "Mila",
        "Mostaganem",
        "Naama",
        "Oran",
        "Ouargla",
        "Oum El Bouaghi",
        "Relizane",
        "Saida",
        "Setif",
        "Sidi Bel Abbes",
        "Skikda",
        "Souk Ahras",
        "Tamanrasset",
        "Tebessa",
        "Tiaret",
        "Tindouf",
        "Tipaza",
        "Tissemsilt",
        "Tizi Ouzou",
        "Tlemcen",
        "Timimoun",
        "Bordj Badji Mokhtar",
        "Ouled Djellal",
        "Béni Abbès",
        "Ain Salah",
        "Ain Guezzam",
        "Touggourt",
        "Djanet",
        "El M'Ghair",
        "El Menia",
    ];

    const fetchData = (value) => {
        const filteredLocations = locationStates.filter((location) =>
            location.toLowerCase().includes(value.toLowerCase()),
        );

        setResults(
            filteredLocations.map((location, index) => ({
                id: index,
                name: location,
            })),
        );
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className='bg-white h-2.5 px-5 py-6 rounded-2xl shadow-lg flex items-center w-68'>
            <FaLocationDot className='bg-transparent border-none h-96 text-3xl w-4 text-lime-700 ' />
            <input
                className='ml-3 text-input '
                placeholder='Location...'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchLocation;
