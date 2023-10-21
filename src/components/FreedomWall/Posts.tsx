"use client";

import { useDispatch, useSelector } from "react-redux";
import { hideCreatePost } from "@/redux/features/posts/createPostSlice";
import Entry from "../Entry";
import { RootState } from "@/redux/store";
import EntriesSkeleton from "../Loading/EntriesSkeleton";
import Image from "next/image";

interface PostsProps {}

export default function Posts({}: PostsProps) {
  const dispatch = useDispatch();
  const { data, isLoadingData } = useSelector(
    (state: RootState) => state.getPostReducer
  );

  let content;

  if (isLoadingData) {
    // content = [...Array.from({ length: 10 })].map((_, i) => {
    //   let randomizedAmount = Math.random() * 2 + 1;
    //   return (
    //     <div key={i} className="entry">
    //       {[...Array.from({ length: randomizedAmount })].map((_, j) => {
    //         return <EntriesSkeleton key={j} />;
    //       })}
    //     </div>
    //   );
    // });

    content = (
      <>
        <div className="entry">
          <EntriesSkeleton />
          <EntriesSkeleton />
        </div>

        <div className="entry">
          <EntriesSkeleton />
        </div>

        <div className="entry">
          <EntriesSkeleton />
          <EntriesSkeleton />
          <EntriesSkeleton />
        </div>

        <div className="entry">
          <EntriesSkeleton />
        </div>

        <div className="entry">
          <EntriesSkeleton />
          <EntriesSkeleton />
        </div>

        <div className="entry">
          <EntriesSkeleton />
          <EntriesSkeleton />
        </div>
      </>
    );
  } else if (data.length === 0) {
    content = (
      <>
        <Image src={"/megamind.jpg"} alt="no-posts" width={500} height={500} />
        <Image src={"/megamind.jpg"} alt="no-posts" width={500} height={500} />
        <Image src={"/megamind.jpg"} alt="no-posts" width={500} height={500} />
      </>
    );
  } else {
    content = data?.map((entry) => {
      return <Entry key={entry._id} {...entry} />;
    });
  }

  return (
    <section
      onClick={() => dispatch(hideCreatePost())}
      className="w-full flex-[2] overflow-hidden p-4 justify-center h-full md:columns-2 columns-1 lg:columns-3"
    >
      {content}
    </section>
  );
}
