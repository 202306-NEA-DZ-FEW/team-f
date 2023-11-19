import AddItem from "@/components/personalinfo/AddItem";
import PersonalInfo from "@/components/personalinfo/PersonalInfo";

const profile = () => {
    return (
        <div>
            <PersonalInfo />
            <span className='flex justify-center items-center text-2xl text-lime-600 font-bold'>
                My items
            </span>
            <AddItem />
            <AddItem />
            <AddItem />
        </div>
    );
};

export default profile;
