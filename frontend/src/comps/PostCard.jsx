'use client';
import { useRouter } from "next/navigation";

export default function PostCard({ post }) {
  const router = useRouter();
  if (!post) return null;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover rounded-t"
          />
        ) : (
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-t">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {post.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {post.shortDesc && <p>{post.shortDesc.slice(0, 120)}...</p>}

        <div className="card-actions justify-end mt-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => router.push(`/view-blog/${post._id}`)}
          >
            View Post
          </button>
        </div>
      </div>
    </div>
  );
}