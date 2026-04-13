"use client";

import { useState } from "react";
import Waveform from "./Waveform";

export default function AudioPlayer({ src }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="glass-card flex flex-col gap-4 rounded-3xl p-6">
      <audio
        src={`http://localhost:3000${src}`}
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <Waveform playing={playing} />
    </div>
  );
}
