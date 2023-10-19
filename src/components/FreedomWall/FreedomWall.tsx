"use client";

import { DataProps } from "@/types/interfaces";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

interface FreedomWallProps {
  data: DataProps[];
}

export default function FreedomWall({ data }: FreedomWallProps) {
  return (
    <main className="flex h-full">
      <Posts data={data} />
      <CreatePost />
    </main>
  );
}
