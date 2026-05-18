import { MoreHorizontal, Plus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const users = [
  {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    role: "Admin",
    status: "Active",
    joined: "May 12, 2026",
  },
  {
    name: "Neha Patel",
    email: "neha@example.com",
    role: "Manager",
    status: "Active",
    joined: "May 10, 2026",
  },
  {
    name: "Rohan Mehta",
    email: "rohan@example.com",
    role: "Member",
    status: "Pending",
    joined: "May 08, 2026",
  },
  {
    name: "Priya Iyer",
    email: "priya@example.com",
    role: "Member",
    status: "Inactive",
    joined: "May 02, 2026",
  },
];

const stats = [
  { label: "Total users", value: users.length },
  { label: "Active", value: users.filter((user) => user.status === "Active").length },
  { label: "Pending", value: users.filter((user) => user.status === "Pending").length },
];

function UsersPage() {
  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground">
            Manage team members and review account access.
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/users/add">
            <Plus />
            Add user
          </Link>
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} size="sm" className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-lg">
        <CardHeader>
          <CardTitle>User list</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-180 text-left text-sm">
              <thead className="border-b text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="py-3 font-medium">User</th>
                  <th className="py-3 font-medium">Role</th>
                  <th className="py-3 font-medium">Status</th>
                  <th className="py-3 font-medium">Joined</th>
                  <th className="py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">{user.role}</td>
                    <td className="py-4">
                      <span className="inline-flex rounded-full border px-2 py-1 text-xs font-medium">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 text-muted-foreground">{user.joined}</td>
                    <td className="py-4 text-right">
                      <Button variant="ghost" size="icon" aria-label={`Open actions for ${user.name}`}>
                        <MoreHorizontal />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default UsersPage;
