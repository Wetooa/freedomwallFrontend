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
      className="w-full overflow-hidden p-4 justify-center h-full md:columns-2 columns-1 lg:columns-3"
    >
      {data?.map((entry) => {
        return <Entry key={entry._id} {...entry} />;
      })}
    </section>
  );
}
