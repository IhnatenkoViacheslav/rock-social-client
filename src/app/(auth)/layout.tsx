import PrivateLayout from "@/components/layout/private-layout/layout";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = await cookies();
  // const token = cookieStore.get("token")?.value;

  // if (token) {
  //   redirect("/login");
  // }

  return <PrivateLayout>{children}</PrivateLayout>;
}
