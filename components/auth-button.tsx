import { signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { LogOut } from "lucide-react";
import Image from "next/image";
import React from "react";

export const GitHubLoginButton = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/dashboard" });
        }}
      >
        <Button className="w-full flex items-center gap-2" variant="secondary">
          <Image src="/svg/github.svg" alt="Github" width={20} height={20} />{" "}
          Login dengan Github
        </Button>
      </form>
    </>
  );
};

export const GoogleLoginButton = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <Button className="w-full flex items-center gap-2" variant="secondary">
          <Image src="/svg/google.svg" alt="Github" width={20} height={20} />{" "}
          Login dengan Google
        </Button>
      </form>
    </>
  );
};
