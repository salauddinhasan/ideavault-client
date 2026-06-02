import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function CommentCard({
  comment,
  currentUserId,
  onEdit,
  onDelete,
}) {
  const isMyComment = currentUserId === comment.userId;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    onEdit(comment._id, editText.trim());
    setIsEditing(false);
  };

  return (
    <div className="flex gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-4">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-sm flex items-center justify-center uppercase shrink-0">
        {comment.userName?.charAt(0) || "U"}
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">
            {comment.userName}
          </span>
          <span className="text-xs text-slate-500">
            {new Date(comment.createdAt).toLocaleDateString()}{" "}
            {new Date(comment.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {isEditing ? (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg text-xs"
            >
              Cancel
            </button>
          </div>
        ) : (
          <p className="text-slate-300 text-sm">{comment.text}</p>
        )}

        {isMyComment && !isEditing && (
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <FaEdit size={11} /> Edit
            </button>
            <button
              type="button"
              onClick={() => onDelete(comment._id)}
              className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1 transition-colors"
            >
              <FaTrashAlt size={11} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
