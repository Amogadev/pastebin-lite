import { notFound } from "next/navigation";

export default async function PastePage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pastes/${params.id}?preview=1`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound(); 
  }

  const data = await res.json();

  return <pre>{data.content}</pre>;
}
