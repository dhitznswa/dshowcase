import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
