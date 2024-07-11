"use server";

import { formSchema } from "../create/page";
import prisma from "@/libs/prismaClient";
import { z } from "zod";

export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
};
