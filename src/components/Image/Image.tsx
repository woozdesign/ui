// Image.tsx

import React, { useState, useRef, useEffect } from 'react';
import styles from './Image.module.scss';
import { combineClassNames } from '@/utils';

export interface ImageProps {
  src: string;
  alt: string;
  placeholder?: string; // A smaller, quickly loading version or a solid color
  className?: string;
  width?: string | number; // Width of the image container
  height?: string | number; // Height of the image container
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // CSS object-fit values
}

const Image: React.FC<ImageProps> = ({ src, alt, placeholder, className, width, height, objectFit = 'cover' }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px',
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoadError = () => {
    setError(true);
  };

  const style = {
    width: width || '100%',
    height: height || '100%',
    objectFit,
  };

  return (
    <div className={combineClassNames([styles.imageContainer, className || ''])} style={{ width, height }}>
      {!error && (
        <>
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            style={style}
            onLoad={() => {
              setLoaded(true);
            }}
            onError={handleImageLoadError}
            className={`${styles.mainImage} ${loaded ? styles.loaded : ''}`}
          />
          {!loaded && placeholder && <img src={placeholder} alt="" aria-hidden="true" style={style} className={styles.placeholderImage} onError={handleImageLoadError} />}
        </>
      )}
      {/* {error && <div className={styles.error}>Image failed to load</div>} */}
    </div>
  );
};

export default Image;
