import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AddItem from "@/components/personalinfo/AddItem";
import PersonalInfo from "@/components/personalinfo/PersonalInfo";

export default function Information({ info }) {
    if (!info) {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <ul>
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
                    <AddItem title={info.title} product={info.product} />
                    <AddItem title={info.title} product={info.product} />
                    <AddItem title={info.title} product={info.product} />
                </li>
            </ul>
            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    try {
        // Fetch the list of available info IDs from your API
        const response = await fetch("http://localhost:4000/infos");
        const data = await response.json();

        if (!data.infos) {
            // Handle the case where data.infos is missing or undefined
            console.error("Data.infos is missing or undefined.");
            return {
                paths: [],
                fallback: false,
            };
        }

        // Generate paths for all available info IDs
        const paths = data.infos.map((info) => ({
            params: { id: info.id.toString() },
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        // Fetch data for a specific info ID based on the provided 'id' parameter
        const response = await fetch(
            `http://localhost:4000/infos/${params.id}`,
        );
        const info = await response.json();

        if (!info) {
            // Handle the case where 'info' is missing or undefined
            console.error("Info not found.");
            return {
                notFound: true,
            };
        }

        return {
            props: { info },
        };
    } catch (error) {
        console.error("Error fetching info:", error);
        return {
            notFound: true,
        };
    }
}
