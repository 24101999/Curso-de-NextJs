import { useState } from "react";

type n = number;
type s = string;

export default function Home() {
  const [n, setN] = useState<n>(20);
  const [s, setS] = useState<s>("string");

  return (
    <div className="">
      <p>{n}</p>
      <p>{s}</p>
    </div>
  );
}
