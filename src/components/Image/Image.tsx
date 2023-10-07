// Image.tsx

import React, { useState, useRef, useEffect } from 'react';
import styles from './Image.module.scss';
import { RadiusProp, combineClassNames, isElementInViewport } from '@/utils';

export interface ImageProps extends RadiusProp {
  src: string;
  alt: string;
  placeholder?: string; // A smaller, quickly loading version or a solid color
  className?: string;
  width?: string | number; // Width of the image container
  height?: string | number; // Height of the image container
  lazyLoad?: boolean;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // CSS object-fit values
}

const Image: React.FC<ImageProps> = ({ src, alt, placeholder, className, lazyLoad = true, radius = 'none', width, height, objectFit = 'cover' }) => {
  const [loaded, setLoaded] = useState(false);
  const [placeHolderLoaded, setPlaceHolderLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const placeHolderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (lazyLoad) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (imgRef.current) {
                imgRef.current.src = imgRef.current.getAttribute('data-src') || '';
              }
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '0px',
        },
      );

      if (imgRef.current) {
        // Check if the image is already inside the viewport
        const isAlreadyVisible = isElementInViewport(imgRef.current);
        if (isAlreadyVisible) {
          if (imgRef.current) {
            imgRef.current.src = imgRef.current.getAttribute('data-src') || '';
          }
        } else {
          observer.observe(imgRef.current);
        }
      }

      return () => {
        observer.disconnect();
      };
    } else {
      if (imgRef.current) {
        imgRef.current.src = imgRef.current.getAttribute('data-src') || '';
      }
    }
  }, [lazyLoad]);

  const handleImageLoadError = () => {
    setError(true);
  };

  const style = {
    width: width || '100%',
    height: height || '100%',
    objectFit,
  };

  return (
    <div className={combineClassNames([styles.imageContainer, className || ''])} style={{ width, height }} data-radius={radius}>
      {!error && (
        <>
          <img
            id={src}
            ref={imgRef}
            src={lazyLoad ? undefined : src} // If not lazyLoad, set the src immediately
            data-src={src}
            alt={alt}
            loading={'lazy'}
            style={style}
            onLoad={() => {
              setLoaded(true);
            }}
            onError={handleImageLoadError}
            className={`${styles.mainImage} ${loaded ? styles.loaded : ''} ${!placeholder ? styles.noPlaceholder : ''}`}
          />
          {!loaded && placeholder && (
            <img
              src={placeholder}
              ref={placeHolderRef}
              alt=""
              aria-hidden="true"
              style={style}
              onLoad={() => {
                setPlaceHolderLoaded(true);
              }}
              className={`${styles.placeholderImage} ${placeHolderLoaded ? styles.loaded : ''}`}
              onError={handleImageLoadError}
            />
          )}
        </>
      )}
      {error && <div className={styles.error}>Image failed to load</div>}
    </div>
  );
};

export default Image;
