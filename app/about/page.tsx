import React from 'react';
import Navbar from '@/components/Navbar';

// Massive inline style and long blocking content
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-4 mx-auto mt-6 justify-center items-center">
        <h1 className="font-bold text-3xl">About Me</h1>

        <div className="flex flex-row gap-6">
          <p className="text-lg max-w-2xl">
            Hello! I'm a frontend developer with a passion for clean design and
            efficient web applications. This site was built using pure React and
            showcases my work. I specialize in React, Node.js, and TypeScript.
          </p>
          {/*
        OPTIMIZATION: Replace the standard <img> tag with the Next.js Image component.
        The `next/image` component automatically optimizes images by resizing them for different devices,
        converting them to modern formats like WebP, and lazy-loading them to improve performance.
        The `priority` prop can be added to preload the image if it's the Largest Contentful Paint (LCP) element.

        OPTIMIZED CODE:
        import Image from 'next/image';
        <Image
          src="/images/headshot.jpg"
          alt="me"
          width={500}
          height={500}
          priority
        />
      */}
          <img
            src="/images/headshot.jpg"
            alt="me"
            className="w-40"
          />
        </div>
      </div>


    </div>
  );
}