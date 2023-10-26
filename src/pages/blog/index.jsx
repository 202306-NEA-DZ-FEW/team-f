import { getAllPosts } from "@/lib/blogApi";

function Blog({ allPosts }) {
    console.log(allPosts);
    return <div></div>;
}

export default Blog;

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        "title",
        "description",
        "slug",
        "image",
        "imageAlt",
        "tags",
        "publishedAt",
        "timeToRead",
    ]);
    return {
        props: { allPosts },
    };
};
