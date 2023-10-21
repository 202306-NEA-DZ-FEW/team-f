import SectionWithCards from "./SectionWithCards";
import Card from "./Card";
import Image from "next/image";

const SectionData = () => {
    return (
        <div>
            <SectionWithCards>
                <Card
                    icon={
                        <Image
                            className='pb-4'
                            src='/marketing-icons/sec1.png'
                            alt='Icon'
                            width={100}
                            height={100}
                        />
                    }
                    title='Card 1 Title'
                >
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s,
                    </p>
                </Card>
                <Card
                    icon={
                        <Image
                            className='pb-4'
                            src='/marketing-icons/sec2.png'
                            alt='Icon'
                            width={100}
                            height={100}
                        />
                    }
                    title='Card 2 Title'
                >
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s,
                    </p>
                </Card>
                <Card
                    icon={
                        <Image
                            className='pb-4'
                            src='/marketing-icons/sec3.png'
                            alt='Icon'
                            width={100}
                            height={100}
                        />
                    }
                    title='Card 3 Title'
                >
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s,
                    </p>
                </Card>
            </SectionWithCards>
        </div>
    );
};

export default SectionData;
