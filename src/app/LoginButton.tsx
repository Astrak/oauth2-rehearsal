"use client";

import { signOut } from "@/auth";
import Button from "@/src/components/Button/Button";
import { useSession } from "next-auth/react";
import { useCallback } from "react";

export default function LoginButton() {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  const click = useCallback(async () => {
    await signOut();
  }, []);
  console.log(session.data);
  return isAuthenticated && <Button onClick={click}>Log out</Button>;
}
