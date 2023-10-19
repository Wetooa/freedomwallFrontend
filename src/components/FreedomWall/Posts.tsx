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
      className="flex-[2] flex flex-wrap gap-2"
    >
      {data?.map((entry) => {
        return <Entry key={entry._id} {...entry} />;
      })}
    </section>
  );
}
