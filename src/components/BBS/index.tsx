"use client";

import React from "react";
import { BBSData } from "@/app/types";

type BBSProps = { data: BBSData[] };

export default function BBS({ data }: BBSProps): JSX.Element {
  return (
    <h1>
      {data.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </h1>
  );
}
