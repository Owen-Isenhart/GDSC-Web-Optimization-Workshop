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
            <img src='/images/project-placeholder.png' alt={p.title} style={{ width: "20%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
