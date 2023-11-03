import { getAllPosts } from "@/lib/blogApi";

import ArticleCard from "@/components/articlecard/ArticleCard";
function Blog({ allPosts }) {
    return (
        <>
            <h1 className='my-20 text-center text-6xl font-semibold'>Blog</h1>
            <div className='my-12'>
                {allPosts.map((post, index) => (
                    <ArticleCard
                        key={post.slug}
                        title={post.title}
                        description={post.description}
                        imageUrl={post.coverImage}
                        articleUrl={"/blog/" + post.slug}
                        textOnleft={index % 2 === 0 ? true : false}
                    />
                ))}
            </div>
        </>
    );
}

export default Blog;

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        "title",
        "description",
        "slug",
        "coverImage",
    ]);
    return {
        props: { allPosts },
    };
};
