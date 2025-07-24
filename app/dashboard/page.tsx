import { auth } from "@/auth";
import React from "react";

export default async function dashboard() {
  const session = await auth();

  console.log(session);

  return <div>Welcome {session?.user?.name}</div>;
}
