"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Project } from "./lib/types";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {projects.map((p) => (
          <div key={p.id}>
            <img src="/images/project-placeholder.png" alt={p.title} style={{ width: "100%" }} />
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
