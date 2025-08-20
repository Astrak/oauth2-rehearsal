"use client";

import Button from "@/components/Button/Button";
import { signIn } from "next-auth/react";
import { useCallback } from "react";

export default function Login() {
  const sign = useCallback(() => {
    signIn("google");
  }, []);
  return (
    <div onClick={sign} className=" cursor-pointer">
      <Button onClick={sign}>Log in with Google</Button>
    </div>
  );
}
