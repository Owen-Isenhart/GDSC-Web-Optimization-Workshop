"use client";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Navbar() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, []);

  return (
    <div style={{ backgroundColor: "#222", padding: "20px", color: "white" }}>
      <h2>My Portfolio</h2>
      <p>{date}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}
