'use client';

import Image, { type ImageProps } from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string;
  lowQualityPlaceholder?: string;
  loadingStrategy?: 'lazy' | 'eager' | 'auto';
  onLoad?: () => void;
  blurDataURL?: string;
}

/**
 * Advanced Image Component with:
 * - Progressive loading
 * - Error handling with fallback
 * - Intersection observer lazy loading
 * - Low quality placeholder
 * - Performance monitoring
 */
export function OptimizedImage({
  src,
  alt,
  fallback = '/images/placeholder.png',
  lowQualityPlaceholder,
  loadingStrategy = 'auto',
  onLoad,
  className = '',
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority || loadingStrategy === 'eager');
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loadingStrategy === 'eager') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, loadingStrategy]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setHasError(true);
    setIsLoading(false);
    if (fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isVisible && (
        <>
          {/* Low quality placeholder */}
          {lowQualityPlaceholder && isLoading && (
            <div
              className="absolute inset-0 blur-sm scale-105"
              style={{
                backgroundImage: `url(${lowQualityPlaceholder})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}

          {/* Main image */}
          <Image
            src={imgSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
            className={`
              transition-opacity duration-300
              ${isLoading ? 'opacity-0' : 'opacity-100'}
              ${hasError ? 'filter grayscale' : ''}
            `}
            {...props}
          />

          {/* Loading spinner */}
          {isLoading && !lowQualityPlaceholder && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
              <div className="w-8 h-8 border-4 border-neutral-300 border-t-neutral-600 rounded-full animate-spin" />
            </div>
          )}
        </>
      )}

      {/* Placeholder when not visible */}
      {!isVisible && (
        <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
      )}
    </div>
  );
}

/**
 * Responsive Image with art direction
 */
interface ResponsiveImageProps extends OptimizedImageProps {
  sources?: Array<{
    media: string;
    srcSet: string;
  }>;
}

export function ResponsiveImage({
  sources,
  ...props
}: ResponsiveImageProps) {
  if (!sources || sources.length === 0) {
    return <OptimizedImage {...props} />;
  }

  return (
    <picture>
      {sources.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.srcSet} />
      ))}
      <OptimizedImage {...props} />
    </picture>
  );
}

/**
 * Image with aspect ratio container
 */
interface AspectImageProps extends OptimizedImageProps {
  aspectRatio?: number; // width / height
}

export function AspectImage({
  aspectRatio = 16 / 9,
  className = '',
  ...props
}: AspectImageProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      <div className="absolute inset-0">
        <OptimizedImage
          {...props}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/**
 * Image gallery with lazy loading
 */
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  columns?: number;
  gap?: number;
  onClick?: (index: number) => void;
}

export function ImageGallery({
  images,
  columns = 3,
  gap = 16,
  onClick,
}: ImageGalleryProps) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => onClick?.(index)}
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width || 400}
            height={image.height || 300}
            loadingStrategy="lazy"
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
