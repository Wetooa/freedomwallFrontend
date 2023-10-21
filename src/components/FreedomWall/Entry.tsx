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
    <div onClick={() => dispatch(showPost(data))} className="entry">
      <h4 className="font-bold text-lg">{codeName}</h4>
      <p className="text-xs mb-1">{formattedDate}</p>
      <p>
        {message.length > MAX_CHARACTER_DISPLAY ? (
          <>
            <span>{message.slice(0, MAX_CHARACTER_DISPLAY).trimEnd()}... </span>
            <span
              onClick={() => dispatch(showPost)}
              className="text-xs font-light text-slate-800 hover:underline"
            >
              See More
            </span>
          </>
        ) : (
          <>{message}</>
        )}
      </p>
    </div>
  );
}
