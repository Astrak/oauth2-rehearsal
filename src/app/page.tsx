import prisma from "@/prisma";
import LoginButton from "./LoginButton";

export default async function Login() {
  const users = await prisma.user.findMany();
  return (
    <div className="cursor-pointer">
      <LoginButton />
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
