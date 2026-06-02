"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast, Toaster } from "react-hot-toast";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import IdeaInfo from "@/components/IdeaInfo";
import CommentSection from "@/components/CommentSection";
 
 

export default function IdeaDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data: session } = authClient.useSession();
  const currentUser = session?.user;

  useEffect(() => {
    if (!id) return;
    const fetchIdea = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/ideas/${id}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setIdea(data);
      } catch {
        toast.error("Could not load the idea details!");
      } finally {
        setLoading(false);
      }
    };
    fetchIdea();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this idea?")) return;
    const t = toast.loading("Deleting idea...");
    try {
      const res = await fetch(`http://localhost:5000/ideas/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.success("Idea deleted!", { id: t });
      router.push("/ideas");
      router.refresh();
    } catch {
      toast.error("Failed to delete!", { id: t });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-950">
        <FaSpinner className="animate-spin text-blue-500 mb-4" size={40} />
        <p className="text-slate-400 text-sm">Retrieving idea details...</p>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-950 text-slate-400 space-y-4">
        <p className="text-lg">No idea found!</p>
        <Link
          href="/ideas"
          className="text-blue-500 flex items-center gap-2 hover:underline"
        >
          <FaArrowLeft /> Back to Ideas
        </Link>
      </div>
    );
  }

  const isOwner = currentUser && idea?.userId === currentUser?.id;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto space-y-6">
        <Link
          href="/ideas"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-500 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Ideas Vault
        </Link>

        <IdeaInfo idea={idea} isOwner={isOwner} onDelete={handleDelete} />

        <CommentSection ideaId={id} currentUser={currentUser} />
      </div>
    </div>
  );
}
