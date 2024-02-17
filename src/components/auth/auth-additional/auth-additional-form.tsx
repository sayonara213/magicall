"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/schema";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/global/auth-provider";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface IAuthFormProps {
  isSignIn?: boolean;
}

const formSchema = z.object({
  userName: z.string().min(4).max(20),
});

export const AuthAdditionalForm: React.FC<IAuthFormProps> = ({ isSignIn }) => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const user = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const { data: existingProfile } = await supabase
      .from("profiles")
      .select()
      .eq("user_name", data.userName)
      .single();

    if (existingProfile) {
      form.setError("userName", { message: "User name already exists" });
      setIsLoading(false);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .insert({ user_name: data.userName, id: user.id });

    if (error) {
      form.setError("userName", { message: error.message });
      setIsLoading(false);
    }

    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-72">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User name</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" loading={isLoading}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
