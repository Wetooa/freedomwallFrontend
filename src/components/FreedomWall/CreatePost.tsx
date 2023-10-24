"use client";

import { EMPTY_INPUT_DATA, LTG_MESSAGE } from "@/lib/constants";
import { RootState } from "@/redux/store";
import { DataProps, InputDataProps } from "@/types/interfaces";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateInputData } from "@/lib/utils";
import { toast } from "react-toastify";
import { defaultToastConfig } from "@/lib/configs";
import { hideCreatePost } from "@/redux/features/posts/createPostSlice";
import { setData } from "@/redux/features/posts/getPostSlice";

interface CreatePostProps {}

async function postMessage(inputData: InputDataProps) {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
  const newPost = await fetch(url, {
    method: "POST",
    body: JSON.stringify(inputData),
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    next: {},
  })
    .then((res) => {
      if (res.status != 200) {
        throw new Error(`Status: ${res.status} | ${res.statusText}`);
      }
      toast.success("Post created successfully", defaultToastConfig);
      return res.json();
    })
    .catch((err) => {
      toast.error(err.message, defaultToastConfig);
    });

  return newPost.message;
}

export default function CreatePost({}: CreatePostProps) {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<InputDataProps>(EMPTY_INPUT_DATA);
  const { data } = useSelector((state: RootState) => state.getPostReducer);

  const { isShowing } = useSelector(
    (state: RootState) => state.createPostReducer
  );

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handlePost = async () => {
    let validation = validateInputData(inputData);

    if (validation instanceof Error) {
      toast.error(
        `Invalid input data! ${validation.message}`,
        defaultToastConfig
      );
      return;
    }

    let inptData = inputData;
    setInputData(EMPTY_INPUT_DATA);
    const newPost: DataProps = await postMessage(inptData);
    dispatch(setData([newPost, ...data]));
    dispatch(hideCreatePost());
  };

  return (
    <section
      className={`${
        !isShowing ? "w-0" : "sm:w-1/3 max-sm:w-full"
      } overflow-hidden fixed z-10 top-0 pt-20 right-0 transition-all shadow-lg bg-gradient-to-b from-slate-200 to-slate-300 h-full `}
    >
      <div className="flex flex-col items-end p-4 gap-5 w-full h-full">
        <h3 className="text-xl font-semibold">Share your thoughts!</h3>

        <div className="w-full">
          <h5>Codename: </h5>
          <input
            className="border-b-slate-500 border-b rounded-lg w-full p-2"
            name="codeName"
            type="text"
            placeholder="ex. LTG"
            value={inputData.codeName}
            onChange={handleOnChange}
          />
        </div>

        <div className="w-full flex-1 pb-4">
          <h5>Message: </h5>
          <textarea
            className="border-b-slate-500 border-b rounded-lg w-full p-2 h-full"
            name="message"
            placeholder={`ex. ${LTG_MESSAGE}`}
            value={inputData.message}
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
