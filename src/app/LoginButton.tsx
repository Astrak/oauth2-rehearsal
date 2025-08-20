"use client";

import Button from "@/components/Button/Button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const click = useCallback(async () => {
    if (isAuthenticated) {
      await signOut();
      console.log("signed out");
    }
  }, [isAuthenticated]);
  return (
    <Link href="/login">
      <Button onClick={click}>{isAuthenticated ? "Log out" : "Log in"}</Button>
    </Link>
  );
}
