"use client";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

const supabase = createClient();

export default function Page() {
  const [user, setUser] = useState<any>();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  useEffect(() => {
    supabase.auth.getUser().then((data) => {
      console.log(data.data?.user || null);
      setUser(data.data?.user || null);
    });
  }, []);

  return (
    <>
      <h1>ユーザー情報</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  );
}
