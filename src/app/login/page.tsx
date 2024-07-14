"use client";
import { createClient } from "@/utils/supabase/client";

export default function Page() {
  const handleOnClick = async function signInWithGithub() {
    const { data, error } = await createClient.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
    <button
      onClick={async () => {
        await SupabaseAuthClient.auth.signInWithOAuth({
          provider,
          options: {
            redirectTo: `http://example.com/auth/callback`,
          },
        });
      }}
    >
      login
    </button>
  );
}
