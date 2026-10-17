'use client';
import { useState } from 'react';
import { Props } from './youtube-iframe.types';
import styles from './youtube-iframe.module.css';

const YoutubeIframe = ({ videoId, title }: Props) => {
  const [active, setActive] = useState(false);
  const label = title ?? 'YouTube video';

  return (
    <figure className={styles.figure}>
      <div className={styles.wrapper}>
        {active ? (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={label}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <button
            type="button"
            className={styles.preview}
            onClick={() => setActive(true)}
            aria-label={`Play video: ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.thumbnail}
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
            />
            <span className={styles.play} aria-hidden="true" />
          </button>
        )}
      </div>
    </figure>
  );
};

export default YoutubeIframe;
