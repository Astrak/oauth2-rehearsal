"use client";

import Button from "@/src/components/Button/Button";
import { signOut, signIn, useSession } from "next-auth/react";
import { signIn as signInPasskey } from "next-auth/webauthn";

export default function LoginButton() {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  return (
    <div className=" flex gap-1.5">
      {isAuthenticated ? (
        <>
          <Button onClick={signOut}>Log out</Button>
          <Button
            onClick={() => signInPasskey("passkey", { action: "register" })}
          >
            Create passkey
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => signInPasskey("passkey")}>
            Login with passkey
          </Button>
          <Button onClick={() => signIn("google")}>Login with Google</Button>
        </>
      )}
    </div>
  );
}
