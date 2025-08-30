"use client";

import Button from "@/src/components/Button/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useCallback } from "react";

export default function LoginButton() {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  const click = useCallback(async () => {
    if (isAuthenticated) {
      await signOut();
    } else {
      await signIn("google");
    }
  }, [isAuthenticated]);
  console.log(session.data);
  return <Button onClick={click}>Log {isAuthenticated ? "out" : "in"}</Button>;
}
