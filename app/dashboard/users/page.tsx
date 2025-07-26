import { auth } from "@/auth";
import { getAllUsers } from "@/lib/users";
import { notFound } from "next/navigation";
import React from "react";
import TableUsers from "./table-users";

export default async function users() {
  const session = await auth();

  if (session?.user.role !== "admin") {
    return notFound();
  }

  const users = await getAllUsers();

  return (
    <div>
      <h1 className="text-xl font-bold">Users Terdaftar</h1>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sapiente.
      </p>
      <div className="mt-3">
        <TableUsers users={users} />
      </div>
    </div>
  );
}
