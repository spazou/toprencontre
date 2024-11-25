import React, { useState } from 'react';
import { Play } from 'lucide-react';

export function VideoPreview() {
  const [showVideo, setShowVideo] = useState(false);
  
  if (showVideo) {
    return (
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/7rUIIxIoWxE?si=YgOgVF34f5J-NqkG&rel=0&modestbranding=1&controls=0"
        title="Présentation JM Date"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full rounded-xl"
      />
    );
  }

  return (
    <div 
      className="relative w-full h-[500px] rounded-xl overflow-hidden cursor-pointer bg-gray-100"
      onClick={() => setShowVideo(true)}
    >
      <img 
        src="https://wend.fr/todelete/avis-jmdate.png" 
        alt="Video preview"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-700 transition-colors">
          <Play className="w-10 h-10 text-white" />
        </div>
      </div>
    </div>
  );
}