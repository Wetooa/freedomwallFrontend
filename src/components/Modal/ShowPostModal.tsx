"use client";

import { convertDate } from "@/lib/utils";
import { hidePost } from "@/redux/features/posts/getPostSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle, AiFillCloseCircle } from "react-icons/ai";

interface ShowPostModalProps {}

export default function ShowPostModal({}: ShowPostModalProps) {
  const { message, updatedAt, codeName } = useSelector(
    (state: RootState) => state.getPostReducer
  );
  const dispatch = useDispatch();

  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    setFormattedDate(convertDate(updatedAt));
  }, [updatedAt]);

  function handleClose() {
    dispatch(hidePost());
  }

  return (
    <section className={`absolute w-full h-full top-0 z-10 `}>
      <div className="w-full h-full fixed flex flex-col items-center justify-center">
        <div
          onClick={handleClose}
          className="w-full h-full absolute bg-slate-500/20 transition-all"
        />

        <div className="p-6 cursor-default mx-10 max-w-lg relative rounded-lg shadow-md shadow-primary bg-white z-30 transition-all">
          <div
            onClick={handleClose}
            className="absolute transition-all top-2 right-2 text-3xl hover:opacity-95 hover:scale-105 text-red-400"
          >
            <AiOutlineCloseCircle />
          </div>
          <h4 className="font-bold text-lg">{codeName}</h4>
          <p className="text-xs mb-1">{formattedDate}</p>
          <p className="mt-5">{message}</p>
        </div>
      </div>
    </section>
  );
}
