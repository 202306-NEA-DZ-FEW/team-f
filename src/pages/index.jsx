import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { getAllPosts } from "@/lib/blogApi";
import ArticleCard from "@/components/articlecard/ArticleCard";
import HeroSection from "@/components/herosection/HeroSection";
import ItemCard from "@/components/itemcard/ItemCard";
import Card from "@/components/marketing-card/Card";
import SectionWithCards from "@/components/marketing-card/SectionWithCards";
import SecondHeroSection from "@/components/secondherosection/SecondHeroSec";
import { marketingCardData1 } from "@/constants";
import { marketingCardData2 } from "@/constants";
import Layout from "@/layout/Layout";
import Image from "next/image";

const HomePage = ({ allPosts }) => {
    const { t } = useTranslation("common");
    const itemsList = [
        {
            id: 1,
            title: "Item 1",
            description: "Description for Item 1",
            location: "Location 1",
            imagesList: ["/item1-image.jpg"],
        },
        {
            id: 2,
            title: "Item 2",
            description: "Description for Item 2",
            location: "Location 2",
            imagesList: ["/item2-image.jpg"],
        },
        {
            id: 3,
            title: "Item 3",
            description: "Description for Item 5",
            location: "Location 3",
            imagesList: ["/item2-image.jpg"],
        },
        {
            id: 4,
            title: "Item 4",
            description: "Description for Item 5",
            location: "Location 4",
            imagesList: ["/item2-image.jpg"],
        },
    ];

    return (
        <>
            {/* <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
                
            </div> */}
            <HeroSection />
            <SectionWithCards SectionTitle='My Section Title'>
                {marketingCardData1.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.content}
                    />
                ))}
            </SectionWithCards>
            <SecondHeroSection>
                {marketingCardData2.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.content}
                    />
                ))}
            </SecondHeroSection>
            <div className='flex space-x-2 mt-32 flex-wrap w-full items-center justify-center  '>
                {itemsList.map((item) => (
                    <div key={item.id} className=''>
                        <ItemCard item={item} />
                    </div>
                ))}
            </div>

            {allPosts.map((post, index) => (
                <div key={post.slug} className=' '>
                    <ArticleCard
                        key={post.slug}
                        title={post.title}
                        description={post.description}
                        imageUrl={post.coverImage}
                        articleUrl={"/blog/" + post.slug}
                        textOnleft={index % 1 === 0 ? true : false}
                    />
                </div>
            ))}
            {/* Section with OUR PARTNERS title and logos */}
            <div className='bg-gray-100 py-16'>
                <div className='container mx-auto'>
                    <h2 className='text-3xl text-center font-bold mb-16'>
                        {t("Our Partners")}
                    </h2>
                    <div className='flex flex-col items-center mb-6 lg:flex-row lg:justify-center lg:space-x-24 md:flex-row md:justify-center md:space-x-16'>
                        {/* Replace the following with your partner logos */}
                        <Image
                            src='/partners/logo1.png'
                            alt='Partner 1'
                            width={100}
                            height={64}
                            className='mb-4 lg:mb-0'
                        />
                        <Image
                            src='/partners/logo1.png'
                            alt='Partner 2'
                            width={100}
                            height={64}
                            className='mb-4 lg:mb-0'
                        />
                        <Image
                            src='/partners/logo1.png'
                            alt='Partner 3'
                            width={100}
                            height={64}
                            className='mb-4 lg:mb-0'
                        />
                        <Image
                            src='/partners/logo1.png'
                            alt='Partner 4'
                            width={100}
                            height={64}
                            className='mb-4 lg:mb-0'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

export const getStaticProps = async ({ locale }) => {
    const allPosts = getAllPosts([
        "title",
        "description",
        "slug",
        "coverImage",
    ]);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            allPosts, // Pass the allPosts prop to HomePage
        },
    };
};
