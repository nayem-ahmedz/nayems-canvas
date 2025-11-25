import PostCard from "../PostCard";

export default function FeaturedPosts() {
    return (
        <article className="containerr">
            <h2 className="text-3xl text-center my-6">Featured Posts</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {
                    [...Array(6)].keys().map(el => <PostCard key={el} />)
                }
            </section>
        </article>
    );
}