"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Project } from "../lib/types";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            {/*
              OPTIMIZATION: Replace the <img> tag with the Next.js Image component.
              When mapping over a list of items, image optimization becomes crucial for performance.
              `next/image` will ensure these images are lazy-loaded and properly sized.

              OPTIMIZED CODE:
              import Image from 'next/image';
              <Image
                src='/images/project-placeholder.png'
                alt={p.title}
                width={200}
                height={200}
              />
            */}
            <img src='/images/project-placeholder.png' alt={p.title} style={{ width: "20%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}