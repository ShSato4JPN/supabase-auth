"use client";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabase } from "@/app/supabase-provider";

export default function Register() {
  const { supabase } = useSupabase();

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Auth
        view="sign_up"
        showLinks={false}
        appearance={{
          theme: ThemeSupa,
          style: {
            input: {
              borderRadius: "8px",
              padding: "12px 16px",
            },
          },
        }}
      />
    </Auth.UserContextProvider>
  );
}
