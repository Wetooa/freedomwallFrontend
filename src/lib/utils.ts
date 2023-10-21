

import { InputDataProps } from "@/types/interfaces"
import { ClassValue, clsx } from "clsx"
import {twMerge} from "tailwind-merge"
import { MAX_WORDS_ON_MESSAGE } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function validateInputData(inputData: InputDataProps) {
  try {
    for (const key in inputData) {
      let data = (inputData as any)[key];
      if (!data) throw new Error("All fields must be provided!")
      if (data.split(' ').length > MAX_WORDS_ON_MESSAGE) throw new Error(`Input fields must have ${MAX_WORDS_ON_MESSAGE} words or less!`)
    }
  } catch (error) {
    return error;
  }
}

export function convertDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: "2-digit",
    hour12: true,
    timeZone: 'UTC', 
  };

  const formattedDate = new Date(date).toLocaleString('en-US', options);

  return formattedDate;
}
