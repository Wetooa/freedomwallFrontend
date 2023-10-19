


import { InputDataProps } from "@/types/interfaces"
import { ClassValue, clsx } from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function validateInputData(inputData: InputDataProps): boolean {
  for (const key in inputData) {
    if (!(inputData as any)[key]) return false;
  }
  return true;
}