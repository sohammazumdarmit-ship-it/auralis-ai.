"use client";

import { useState } from "react";
import { uploadAudio } from "../utils/api";

export default function UploadBox({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    setStatus("Uploading...");
    try {
      const res = await uploadAudio(file, setProgress);
      setStatus("Upload successful!");
      onUploadSuccess(res.filePath);
    } catch (err) {
      setStatus("Upload failed");
    }
  };

  return (
    <div className="glass-card flex flex-col items-center gap-4 rounded-3xl p-6 text-center">
      <input
        type="file"
        accept=".mp3,.wav"
        onChange={(e) => setFile(e.target.files[0])}
        className="text-sm"
      />

      <button
        onClick={handleUpload}
        className="rounded-full bg-gradient-to-r from-neonBlue to-neonPurple px-6 py-2 text-black font-semibold hover:opacity-90"
      >
        Upload Audio
      </button>

      {progress > 0 && <p>{progress}%</p>}
      <p className="text-sm text-slate-400">{status}</p>
    </div>
  );
}
