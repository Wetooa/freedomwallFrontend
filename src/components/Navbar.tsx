"use client";

import { toggleShowCreatePost } from "@/redux/features/posts/createPostSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const dispatch = useDispatch();

  return (
    <nav className="w-full h-20 shadow-md flex items-center px-4 sticky top-0 justify-between bg-white z-20">
      <div className="flex items-center cursor-pointer">
        <Image
          src={"/android-chrome-512x512.png"}
          alt="jake"
          width={100}
          height={100}
          className="rounded-full p-5"
        />
        <h2 className="font-bold text-3xl">Freedom Wall</h2>
      </div>

      <button onClick={() => dispatch(toggleShowCreatePost())}>
        Create Post
      </button>
    </nav>
  );
}
