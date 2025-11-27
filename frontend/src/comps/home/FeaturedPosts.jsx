'use client';

import PostCard from "../PostCard";
import { useEffect, useState } from "react";

export default function FeaturedPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        // Fetch all blogs from backend (no userId)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
        if (!res.ok) throw new Error("Failed to fetch featured posts");
        const data = await res.json();

        // Sort by creation date descending (latest first)
        const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Take first 6 posts (or less if fewer exist)
        const featured = sorted.slice(0, 6);
        setPosts(featured);
      } catch (err) {
        console.error("Failed to fetch featured posts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, []);

  if (loading) return <p className="text-center my-6">Loading featured posts...</p>;
  if (!posts.length) return <p className="text-center my-6">No featured posts yet.</p>;

  return (
    <article className="containerr px-4">
      <h2 className="text-3xl text-center my-6">Featured Posts</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
    </article>
  );
}