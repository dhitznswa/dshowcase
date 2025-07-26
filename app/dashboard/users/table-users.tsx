import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type User } from "@prisma/client";
import { TrashIcon, UserIcon } from "lucide-react";
import React from "react";

export default function TableUsers({ users }: { users: User[] }) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">No</TableHead>
              <TableHead className="w-30 text-center">Profile</TableHead>
              <TableHead className="w-45">Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, i) => (
              <TableRow key={user.id}>
                <TableCell className="w-10">{i + 1}</TableCell>
                <TableCell className="w-30 h-full flex items-center justify-center">
                  <Avatar className="h-6 w-6 border border-muted-foreground/50 flex items-center justify-center cursor-pointer">
                    <AvatarImage src={user.image as string} />
                    <AvatarFallback>
                      <UserIcon className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>@{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge className="bg-green-400 text-white">Active</Badge>
                </TableCell>
                <TableCell className="flex items-center justify-end gap-3">
                  <Button variant="destructive" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
