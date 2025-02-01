import React from 'react';
import Image from 'next/image';

export interface ParallaxSectionProps {
  imageUrl?: string;
  bgImage?: string;
  height?: string;
  overlayContent?: React.ReactNode;
  children?: React.ReactNode;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  bgImage,
  height = '100vh',
  overlayContent,
  children
}) => {
  const backgroundImage = imageUrl || bgImage;

  return (
    <div className="relative" style={{ height }}>
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || ''}
          alt="Parallax background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {overlayContent || children}
      </div>
    </div>
  );
};
