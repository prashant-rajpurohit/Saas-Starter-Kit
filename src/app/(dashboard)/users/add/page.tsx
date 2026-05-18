"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addUserSchema } from "@/lib/schemas";
import { AddUserFormValues } from "@/lib/types";
import CustomField from "@/components/molecules/custom-field";

const defaultValues: AddUserFormValues = {
  name: "",
  email: "",
  phone: "",
  role: "",
  status: "active",
};

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Manager", value: "manager" },
  { label: "Member", value: "member" },
];

const statuses = [
  { label: "Active", value: "active" },
  { label: "Pending", value: "pending" },
  { label: "Inactive", value: "inactive" },
];

function AddUserPage() {
  const form = useForm<AddUserFormValues>({
    resolver: zodResolver(addUserSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit = async (values: AddUserFormValues) => {
    toast.success("User created", {
      description: `${values.name} has been added successfully.`,
      position: "top-right",
    });
    reset(defaultValues);
  };
  console.log(form.watch(), "watch");
  return (
    <main className="mx-auto w-full  space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" asChild aria-label="Back to users">
          <Link href="/users">
            <ArrowLeft />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Add user</h1>
          <p className="text-sm text-muted-foreground">
            Create a team member and assign their access level.
          </p>
        </div>
      </div>

      <Card className="rounded-lg">
        <CardHeader>
          <CardTitle>User details</CardTitle>
        </CardHeader>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <div className="grid gap-5 sm:grid-cols-2">
                <CustomField
                  name="name"
                  label="Full name"
                  placeholder="Aarav Sharma"
                  isLoading={false}
                />

                <CustomField
                  name="email"
                  label="Email"
                  placeholder="user@example.com"
                  type="email"
                  isLoading={false}
                />

                <CustomField
                  name="phone"
                  label="Phone"
                  placeholder="+91 98765 43210"
                  type="tel"
                  isLoading={false}
                />

                <CustomField
                  select
                  name="role"
                  label="Role"
                  placeholder="Select role"
                  options={roles}
                  isLoading={false}
                />

                <CustomField
                  select
                  name="status"
                  label="Status"
                  placeholder="Select status"
                  options={statuses}
                  isLoading={false}
                />
              </div>
            </CardContent>
            <div className="flex gap-2 mx-2 float-right">
              <Button variant="outline" type="button" asChild>
                <Link href="/users">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                <Save />
                {isSubmitting ? "Saving..." : "Save user"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </Card>
    </main>
  );
}

export default AddUserPage;
