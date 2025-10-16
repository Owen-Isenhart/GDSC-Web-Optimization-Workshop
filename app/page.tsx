"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Project } from "./lib/types";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=3")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <div className="flex flex-col mx-6">
      <Navbar />
      <h1 className="font-bold text-3xl mt-4">Hi, I'm Joe!</h1>
      <p className="text-lg mb-4">Welcome to my portfolio site! It might be a little slow for now, but it won't be for long!</p>
      <h2 className="text-xl">Here are some of my projects!</h2>
      <a className="underline text-gray-300 mb-2" href="/projects">Click here to see them all</a>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id}>
            {/* use nextjs Image */}
            <img src="/images/project-placeholder.png" alt={p.title}/>
            <p>{p.title}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl mt-8">Here is some of my work experience!</h2>
      <a className="underline text-gray-300 mb-2" href="/projects">Click here to see them all</a>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id}>
            {/* use nextjs Image */}
            <img src="/images/project-placeholder.png" alt={p.title}/>
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}