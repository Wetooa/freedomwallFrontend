import FreedomWall from "@/components/FreedomWall/FreedomWall";
import { DataProps } from "@/types/interfaces";

export default async function Home() {
  const data: DataProps[] = await getData();

  return <FreedomWall data={data} />;
}

async function getData() {
  const url = process.env.BACKEND_URL ?? "";
  const entries = await fetch(url, {
    next: { revalidate: 3600 },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return entries;
}
