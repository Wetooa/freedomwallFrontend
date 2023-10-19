"use client";

import { toggleShowCreatePost } from "@/redux/features/posts/createPostSlice";
import { useDispatch } from "react-redux";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const dispatch = useDispatch();

  return (
    <nav className="w-full h-20 shadow-md flex items-center px-4 sticky top-0 justify-between">
      <h2 className="font-bold text-3xl">Freedom Wall</h2>

      <button onClick={() => dispatch(toggleShowCreatePost())}>
        Create Post
      </button>
    </nav>
  );
}
