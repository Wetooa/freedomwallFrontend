import { DataProps } from "@/types/interfaces";

interface EntryProps extends DataProps {}

export default function Entry({ message, codeName, updatedAt }: EntryProps) {
  return (
    <div className="rounded-lg shadow-sm border border-slate-200 p-2 hover:scale-105 hover:opacity-80 transition-all h-fit">
      <h4 className="font-bold">{codeName}</h4>
      <p className="text-xs">{updatedAt}</p>
      <p>{message}</p>
    </div>
  );
}
