"use client";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Navbar() {
  const [date, setDate] = useState("");

  {/*
    OPTIMIZATION: The 'moment' library is quite large and can increase your bundle size.
    since we don't need to display the time, we should remove it
  */}
  useEffect(() => {
    setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, []);

  return (
    <div className="mt-2">
      <p>{date}</p>
      <div className="flex justify-center gap-6">
        {/*
          OPTIMIZATION: Replace `<a>` tags with Next.js's `<Link>` component for internal navigation.
          Using `<a>` tags causes a full page refresh, losing application state and slowing down navigation.
          The `<Link>` component enables client-side navigation, which is much faster.

          OPTIMIZED CODE:
          import Link from 'next/link';
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        */}
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}