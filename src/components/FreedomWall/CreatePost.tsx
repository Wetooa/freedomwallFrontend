import { EMPTY_INPUT_DATA, LTG_MESSAGE } from "@/lib/constants";
import { RootState } from "@/redux/store";
import { InputDataProps } from "@/types/interfaces";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { validateInputData } from "@/lib/utils";
import { toast } from "react-toastify";
import axios from "axios";
import { defaultToastConfig } from "@/lib/configs";

interface CreatePostProps {}

export default function CreatePost({}: CreatePostProps) {
  const [inputData, setInputData] = useState<InputDataProps>(EMPTY_INPUT_DATA);

  const { isShowing } = useSelector(
    (state: RootState) => state.createPostReducer
  );

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handlePost = () => {
    if (!validateInputData(inputData)) {
      toast.error("Invalid input data", defaultToastConfig);
      return;
    }

    const url = process.env.BACKEND_URL ?? "";
    axios
      .post(url, inputData)
      .then(() => {
        toast.success("Post created successfully", defaultToastConfig);
      })
      .catch((err) => {
        toast.error(err.message, defaultToastConfig);
      });
  };

  return (
    <section
      className={`${
        !isShowing ? "w-0" : "flex-1"
      } overflow-hidden transition-all shadow-lg`}
    >
      <div className="flex flex-col items-end p-4 gap-5 w-full h-full">
        <h3 className="text-xl font-semibold">Share your thoughts!</h3>

        <div className="w-full">
          <h5>Codename: </h5>
          <input
            className="border-b-slate-500 border-b focus:outline-none w-full p-2"
            name="codeName"
            type="text"
            placeholder="ex. LTG"
            onChange={handleOnChange}
          />
        </div>

        <div className="w-full">
          <h5>Message: </h5>
          <textarea
            className="border-b-slate-500 border-b focus:outline-none w-full p-2 h-48"
            name="message"
            placeholder={`ex. ${LTG_MESSAGE}`}
            onChange={handleOnChange}
          />
        </div>

        <button onClick={handlePost} className="">
          Post
        </button>
      </div>
    </section>
  );
}
