"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import AudioPlayer from "../components/AudioPlayer";

export default function Home() {
  const [audioPath, setAudioPath] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-6">
      <Navbar />

      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Auralis AI</h1>
        <p className="text-slate-400">Transform Sound into Music</p>
      </div>

      <UploadBox onUploadSuccess={setAudioPath} />

      {audioPath && <AudioPlayer src={audioPath} />}
    </main>
  );
}
