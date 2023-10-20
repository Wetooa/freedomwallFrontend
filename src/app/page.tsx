import FreedomWall from "@/components/FreedomWall/FreedomWall";
import { DataProps } from "@/types/interfaces";

export default async function Home() {
  const data: DataProps[] = await getData();

  return <FreedomWall data={data} />;
}

async function getData() {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
  // no cache for now
  const entries: DataProps[] = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return entries.reverse();
}
