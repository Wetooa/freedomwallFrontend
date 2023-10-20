import { useDispatch } from "react-redux";
import { hideCreatePost } from "@/redux/features/posts/createPostSlice";
import Entry from "../Entry";
import { DataProps } from "@/types/interfaces";

interface PostsProps {
  data: DataProps[];
}

export default function Posts({ data }: PostsProps) {
  const dispatch = useDispatch();
  return (
    <section
      onClick={() => dispatch(hideCreatePost())}
      className="flex-[2] p-4 justify-center h-full columns-2 box-border mx-auto"
    >
      {data?.map((entry) => {
        return <Entry key={entry._id} {...entry} />;
      })}
    </section>
  );
}
