"use client";

import { MAX_CHARACTER_DISPLAY } from "@/lib/constants";
import { convertDate } from "@/lib/utils";
import { showPost } from "@/redux/features/posts/getPostSlice";
import { DataProps } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface EntryProps extends DataProps {}

export default function Entry(data: EntryProps) {
  const { message, codeName, updatedAt } = data;
  const dispatch = useDispatch();

  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    setFormattedDate(convertDate(updatedAt));
  }, [updatedAt]);

  return (
    <div
      onClick={() => dispatch(showPost(data))}
      className="m-2 break-inside-avoid rounded-lg shadow-sm border border-slate-200 bg-slate-50 p-2 transition-all hover:brightness-105 hover:shadow-md hover:shadow-primary hover:scale-105 cursor-pointer"
    >
      <h4 className="font-bold text-lg">{codeName}</h4>
      <p className="text-xs mb-1">{formattedDate}</p>
      <p>
        {message.slice(0, MAX_CHARACTER_DISPLAY)}
        {message.length > MAX_CHARACTER_DISPLAY && (
          <span
            onClick={() => dispatch(showPost)}
            className="text-sm text-slate-900"
          >
            See More...
          </span>
        )}
      </p>
    </div>
  );
}
