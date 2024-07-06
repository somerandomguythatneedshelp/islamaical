import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface BoxProps {
  imageSource: string;
  imageAlt: string;
  text: string;
  href?: string; // Make the href prop optional
}

const Box: React.FC<BoxProps> = ({ imageSource, imageAlt, text, href }) => {
  const content = (
    <div className="relative w-32 h-32">
    <Image
      src={imageSource}
      alt={imageAlt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default Box;
