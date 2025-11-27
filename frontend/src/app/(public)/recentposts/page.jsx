'use client';

import PostCard from "@/comps/PostCard";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Recent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
        if (!res.ok) throw new Error("Failed to fetch recent posts");

        const data = await res.json();
        // Sort by creation date descending and take 6 most recent
        const sortedRecent = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedRecent.slice(0, 6)); 
      } catch (err) {
        toast.error(err.message || "Failed to load recent posts");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading recent posts...</p>;
  if (!posts.length) return <p className="text-center mt-6">No recent posts available.</p>;

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-3xl font-bold text-center mb-6">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}