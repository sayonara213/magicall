import { Navbar } from "@/components/global/navbar";
import { Database } from "@/lib/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", data.user?.id!)
    .single();

  if (!profile) {
    redirect("/auth/one-more-step");
  }

  return (
    <div className="h-full w-full flex">
      <Navbar />
      {children}
    </div>
  );
}
