import React from 'react';
import Navbar from '@/components/Navbar';

// Massive inline style and long blocking content
export default function About() {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <p style={{ fontSize: '18px', lineHeight: '2', maxWidth: '800px' }}>
        Hello! I'm a frontend developer with a passion for clean design and
        efficient web applications. This site was built using pure React and
        showcases my work. I specialize in React, Node.js, and TypeScript.
      </p>
      <img
        src="/images/headshot.jpg"
        alt="me"
        style={{ width: '500px' }}
      />
    </div>
  );
}
