import { useEffect, useState } from "react";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AddItem from "@/components/personalinfo/AddItem";
import PersonalInfo from "@/components/personalinfo/PersonalInfo";

export default function Blog() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        async function fetchInfos() {
            try {
                const response = await fetch("http://localhost:4000/infos");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                setInfos(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchInfos();
    }, []);

    return (
        <div>
            <Navbar />
            <ul>
                {infos &&
                    infos.map((info) => (
                        <li key={info.id}>
                            <PersonalInfo
                                name={info.name}
                                surname={info.surname}
                                location={info.location}
                                phone={info.phone}
                                email={info.email}
                            />
                            <span className='flex justify-center items-center text-2xl text-zinc-700 font-bold'>
                                My items
                            </span>
                            <AddItem
                                title={info.title}
                                product={info.product}
                            />
                            <AddItem
                                title={info.title}
                                product={info.product}
                            />
                            <AddItem
                                title={info.title}
                                product={info.product}
                            />
                            <Footer />
                        </li>
                    ))}
            </ul>
        </div>
    );
}
