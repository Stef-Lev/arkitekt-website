'use client';
import { useState, useEffect } from 'react';
import Loader from '../loader/loader';
import { Props } from './youtube-iframe.types';
import styles from './youtube-iframe.module.css';

const YoutubeIframe = ({ videoId }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.wrapper}>
      {loading && <Loader size={80} />}
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${videoId}?si=DXqbVs2baZ3Ydsml`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeIframe;
