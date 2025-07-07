'use client';
import { useState } from 'react';
import Loader from '../loader/loader';

interface Props {
  videoId: string;
}
const YoutubeIframe = ({ videoId }: Props) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && <Loader size={80} />}
      <iframe
        className="aspect-video w-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?si=DXqbVs2baZ3Ydsml`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export default YoutubeIframe;
