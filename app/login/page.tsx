import { GitHubLoginButton, GoogleLoginButton } from "@/components/auth-button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function login() {
  return (
    <>
      <div className="w-full h-dvh flex items-center justify-center ">
        <Card className="max-w-xl w-full shadow-md">
          <CardContent>
            <h1 className="text-lg font-bold text-center">
              Masuk ke MyShowcase
            </h1>
            <p className="text-center font-light text-muted-foreground">
              Cepat, Efisien, Simple. Satu klik buat akun sekaligus masuk!
            </p>
            <div className="mt-6 space-y-4 px-6">
              <GoogleLoginButton />
              <GitHubLoginButton />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
