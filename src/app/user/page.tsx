import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <h1>ユーザー情報</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  );
}
