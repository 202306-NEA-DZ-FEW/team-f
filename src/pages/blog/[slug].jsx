/* eslint-disable @next/next/no-img-element */
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blogApi";

const PostHeader = ({ title, image, imageAlt, date, timeToRead }) => {
    return (
        <>
            <div className='mb-20 text-center mt-10'>
                <img
                    src={image}
                    alt={imageAlt}
                    className='w-full h-[35rem] object-cover rounded-lg'
                />
                <h1 className='text-3xl my-8'>{title}</h1>
                <p>{`Time to read ${timeToRead} min`} </p>
                <p>{`publiched: ${new Date(date).toDateString()}`}</p>
            </div>
        </>
    );
};
const PostBody = ({ content }) => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div
                className='prose-p:w-full lg:prose-xl  w-full lg:w-[58rem] prose prose-override-width text-black
         prose-headings:text-black
         prose-h4:text-[1.7rem] 
         prose-img:w-full '
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};
export default function Post({ post }) {
    const router = useRouter();
    const { title, content, coverImage, date } = post;
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <>
            {router.isFallback ? (
                <h1>Loading…</h1>
            ) : (
                <>
                    <article className='mb-32'>
                        <PostHeader
                            title={title}
                            image={coverImage}
                            date={date}
                        />
                        <PostBody content={content} />
                    </article>
                </>
            )}
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "description",
        "slug",
        "coverImage",
        "date",
        "content",
    ]);
    const content = await markdownToHtml(post.content || "");
    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
