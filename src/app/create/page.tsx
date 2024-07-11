"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postBBS } from "../actions/postBBSAction";

export const formSchema = z.object({
  username: z.string().min(2, { message: "Username is too short" }),
  title: z.string().min(2, { message: "Username is too short" }),
  content: z
    .string()
    .min(10, { message: "Username is too short" })
    .max(140, { message: "Content is too long" }),
});

//type FormValues = z.infer<typeof formSchema>;

export default function Create() {
  const { register } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  });

  async function onSubmit() {
    // server action の呼び出し例
    postBBS({ title: "title", content: "content", username: "username" });
  }

  return (
    <form onSubmit={onSubmit}>
      <input {...register("username")} />
      <input {...register("title")} />
      <input {...register("content")} />
      <input type="submit" value="click" />
    </form>
  );
}
