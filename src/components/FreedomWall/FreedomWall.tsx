"use client";

import { DataProps } from "@/types/interfaces";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import ShowPostModal from "@/components/Modal/ShowPostModal";

interface FreedomWallProps {
  data: DataProps[];
}

export default function FreedomWall({ data }: FreedomWallProps) {
  return (
    <main className="relative flex h-full">
      <ShowPostModal />
      <Posts data={data} />
      <CreatePost />
    </main>
  );
}
