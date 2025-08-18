"use client";

import Button from "@/components/Button/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  return (
    <Link href="login">
      <Button text={isAuthenticated ? "Log out" : "Log in"} />
    </Link>
  );
}
