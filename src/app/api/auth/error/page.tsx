"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const search = useSearchParams();
  return <div>Error! {search.get("error")} error</div>;
}
