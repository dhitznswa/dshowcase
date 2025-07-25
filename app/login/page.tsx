import { GitHubLoginButton, GoogleLoginButton } from "@/components/auth-button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircleIcon } from "lucide-react";
import React from "react";

export default async function login({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search_params = await searchParams;
  const error = search_params.error;

  return (
    <>
      <div className="w-full h-dvh flex items-center justify-center px-4">
        <div className="max-w-xl w-full space-y-4">
          <Card className="shadow-md">
            <CardContent>
              <h1 className="text-lg font-bold text-center">
                Masuk ke D&apos;Showcase
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
          {error ? (
            error === "OAuthAccountNotLinked" ? (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>
                  Email sudah terdaftar menggunakan metode login lain
                </AlertTitle>
              </Alert>
            ) : null
          ) : null}
        </div>
      </div>
    </>
  );
}
