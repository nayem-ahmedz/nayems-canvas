'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ViewBlogPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extract blog ID from URL
  const blogId = pathname.split("/").pop();

  // Client-side protection
  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/login");
    }
  }, [status, session, router]);

  // Fetch blog data
  useEffect(() => {
    if (!session) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blogId}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        toast.error(err.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [session, blogId]);

  if (status === "loading" || !session || loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-center mt-10">Blog not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow mb-10">
      <title>Blog Details</title>
      <ToastContainer position="top-right" autoClose={3000} />
      <button
        className="btn btn-sm btn-outline mb-4"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">
        By {blog.author} | {blog.date ? new Date(blog.date).toLocaleDateString() : "-"}
      </p>

      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full max-h-96 object-cover rounded mb-4"
        />
      )}

      {blog.shortDesc && <p className="mb-4 font-medium">{blog.shortDesc}</p>}

      <p className="whitespace-pre-line">{blog.fullDesc}</p>
    </div>
  );
}