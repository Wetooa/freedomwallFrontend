"use client";

import { useDispatch, useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import ShowPostModal from "@/components/Modal/ShowPostModal";
import { RootState } from "@/redux/store";
import { DataProps } from "@/types/interfaces";
import { useEffect } from "react";
import { setData } from "@/redux/features/posts/getPostSlice";

interface FreedomWallProps {}

export default function FreedomWall({}: FreedomWallProps) {
  const { isShowing } = useSelector((state: RootState) => state.getPostReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
      // no cache for now
      let data: DataProps[] = await fetch(url, {
        method: "GET",
        cache: "no-cache",
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      dispatch(setData(data.toReversed()));
    }
    getData();
  }, [dispatch]);

  return (
    <main className="relative flex h-full">
      {isShowing && <ShowPostModal />}
      <Posts />
      <CreatePost />
    </main>
  );
}
