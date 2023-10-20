


import { InputDataProps } from "@/types/interfaces"
import { ClassValue, clsx } from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function validateInputData(inputData: InputDataProps): boolean {
  for (const key in inputData) {
    let data = (inputData as any)[key];
    if (!data || data.split(' ').length > 200) return false;
  }
  return true;
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