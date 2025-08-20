"use client";

import Button from "@/components/Button/Button";
import { signOut, useSession } from "next-auth/react";
import { useCallback } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const click = useCallback(async () => {
    await signOut();
  }, []);
  return isAuthenticated && <Button onClick={click}>Log out</Button>;
}
