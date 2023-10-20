


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