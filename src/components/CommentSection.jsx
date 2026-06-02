import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaComment, FaSpinner, FaPaperPlane } from "react-icons/fa";
import CommentCard from "./CommentCard";

export default function CommentSection({ ideaId, currentUser }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/comments/${ideaId}`);
      const data = await res.json();
      setComments(data);
    } catch {
      toast.error("Could not load comments!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ideaId) fetchComments();
  }, [ideaId]);

  const handleAdd = async () => {
    if (!currentUser) return toast.error("Please login to comment!");
    if (!newComment.trim()) return toast.error("Comment cannot be empty!");

    setSubmitting(true);
    const t = toast.loading("Adding comment...");
    try {
      const res = await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ideaId,
          text: newComment.trim(),
          userName: currentUser.name,
          userEmail: currentUser.email,
          userId: currentUser.id,
        }),
      });
      if (!res.ok) throw new Error();
      toast.success("Comment added!", { id: t });
      setNewComment("");
      fetchComments();
    } catch {
      toast.error("Failed to add comment!", { id: t });
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = async (commentId, text) => {
    const t = toast.loading("Updating...");
    try {
      const res = await fetch(`http://localhost:5000/comments/${commentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error();
      toast.success("Comment updated!", { id: t });
      fetchComments();
    } catch {
      toast.error("Failed to update!", { id: t });
    }
  };

  const handleDelete = async (commentId) => {
    if (!window.confirm("Delete this comment?")) return;
    const t = toast.loading("Deleting...");
    try {
      const res = await fetch(`http://localhost:5000/comments/${commentId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.success("Deleted!", { id: t });
      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch {
      toast.error("Failed to delete!", { id: t });
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-10 space-y-6">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <FaComment className="text-blue-500" />
        Comments
        <span className="text-sm font-normal text-slate-400">
          ({comments.length})
        </span>
      </h2>

      {/* ADD COMMENT */}
      {currentUser ? (
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center uppercase shrink-0">
            {currentUser.name?.charAt(0) || "U"}
          </div>
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Write a comment..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              onClick={handleAdd}
              disabled={submitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50"
            >
              {submitting ? (
                <FaSpinner className="animate-spin" size={14} />
              ) : (
                <FaPaperPlane size={14} />
              )}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-slate-400">
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>{" "}
          to leave a comment.
        </p>
      )}

      {/* LIST */}
      {loading ? (
        <div className="flex justify-center py-6">
          <FaSpinner className="animate-spin text-blue-500" size={24} />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-slate-500 text-sm text-center py-6">
          No comments yet. Be the first!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentCard
              key={comment._id}
              comment={comment}
              currentUserId={currentUser?.id}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
