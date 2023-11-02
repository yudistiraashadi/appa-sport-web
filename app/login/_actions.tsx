"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const result = z
    .object({
      email: z
        .string()
        .nonempty({ message: "Email tidak boleh kosong" })
        .email({ message: "Email tidak valid." }),
      password: z
        .string()
        .nonempty({ message: "Password tidak boleh kosong" })
        .min(6, { message: "Password minimal 6 karakter." }),
    })
    .safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

  // validasi error
  if (!result.success) {
    let errorFormatted = result.error.format();

    return {
      error: {
        email: errorFormatted.email?._errors[0],
        password: errorFormatted.password?._errors[0],
      },
    };
  }

  const { email, password } = result.data;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // login with supabase
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // supabase error
  if (error) {
    return {
      error: {
        general:
          error.status === 400 ? "Email atau password salah" : error.message,
      },
    };
  }

  // redirect if success
  redirect("/dashboard");
}
