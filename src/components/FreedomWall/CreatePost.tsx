import { EMPTY_INPUT_DATA, LTG_MESSAGE } from "@/lib/constants";
import { RootState } from "@/redux/store";
import { InputDataProps } from "@/types/interfaces";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { validateInputData } from "@/lib/utils";
import { toast } from "react-toastify";
import { defaultToastConfig } from "@/lib/configs";

interface CreatePostProps {}

async function postMessage(
  inputData: InputDataProps,
  setInputData: Dispatch<SetStateAction<InputDataProps>>
) {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
  await fetch(url, {
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
      setInputData(EMPTY_INPUT_DATA);
    })
    .catch((err) => {
      toast.error(err.message, defaultToastConfig);
    });
}

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

  const handlePost = async () => {
    if (!validateInputData(inputData)) {
      toast.error(
        "Invalid input data (use less than 200 words)",
        defaultToastConfig
      );
      return;
    }

    postMessage(inputData, setInputData);
  };

  return (
    <section
      className={`${
        !isShowing ? "w-0" : "w-96"
      } overflow-hidden fixed z-10 top-0 pt-20 right-0 transition-all shadow-lg bg-slate-200 h-full `}
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
            value={inputData.codeName}
            onChange={handleOnChange}
          />
        </div>

        <div className="w-full">
          <h5>Message: </h5>
          <textarea
            className="border-b-slate-500 border-b focus:outline-none w-full p-2 h-48"
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
