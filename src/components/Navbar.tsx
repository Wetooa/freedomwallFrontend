"use client";

import { toggleShowCreatePost } from "@/redux/features/posts/createPostSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const dispatch = useDispatch();

  return (
    <nav className="w-full h-20 shadow-md flex items-center px-4 fixed top-0 justify-between bg-white z-20 shadow-primary">
      <Link className="flex items-center cursor-pointer" href={"/"}>
        <Image
          src={"/android-chrome-512x512.png"}
          alt="jake"
          width={50}
          height={50}
          className="rounded-full m-2"
        />
        <h2 className="font-bold text-3xl">Freedom Wall</h2>
      </Link>

      <div className="flex gap-10 max-sm:hidden">
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>About</Link>
      </div>

      <button onClick={() => dispatch(toggleShowCreatePost())}>
        Create Post
      </button>
    </nav>
  );
}
