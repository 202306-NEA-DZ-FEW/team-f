import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getAllPosts } from "@/lib/blogApi";
import { getAllItems } from "@/lib/firebase/firestoreFunctions";

import ArticleCard from "@/components/articlecard/ArticleCard";
import CategoryCard from "@/components/categorycard/CategoryCard";
import BrowseSection from "@/components/homepage/BrowseSection";
import CompaniesSection from "@/components/homepage/CompaniesSection";
import HeroSection from "@/components/homepage/HeroSection";
import SecondHeroSection from "@/components/homepage/SecondHeroSec";
import ValueSection from "@/components/homepage/ValueSection";
import ItemCard from "@/components/itemcard/ItemCard";

import { categories } from "@/constants";

const HomePage = ({ allPosts, items }) => {
    const { t } = useTranslation("common");

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
            <ValueSection />
            <BrowseSection />
            <div className='my-28'>
                <h2 className='text-3xl font-semibold mb-10'>
                    Browse by category:{" "}
                </h2>
                <div className='flex justify-between'>
                    {categories.map((category) => {
                        return <CategoryCard key={category.id} {...category} />;
                    })}
                </div>
            </div>
            <h2 className='text-3xl font-semibold mb-10'>Top items: </h2>
            <div className='flex flex-wrap justify-between w-full mt-5'>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>

            <SecondHeroSection />
            <CompaniesSection />

            <h2 className='text-6xl font-semibold mb-10 text-black text-center'>
                Blog
            </h2>
            {allPosts.map((post, index) => (
                <div key={post.slug} className=' '>
                    <ArticleCard
                        key={post.slug}
                        title={post.title}
                        description={post.description}
                        imageUrl={post.coverImage}
                        articleUrl={"/blog/" + post.slug}
                        textOnleft={index % 2 === 0 ? true : false}
                    />
                </div>
            ))}
        </>
    );
};

export default HomePage;

export const getStaticProps = async ({ locale }) => {
    let items = await getAllItems();
    items = JSON.parse(JSON.stringify(items));
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
            items,
        },
    };
};
