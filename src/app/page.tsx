import prisma from "@/prisma";

export default async function Login() {
  const users = await prisma.user.findMany();
  return (
    <div className="cursor-pointer">
      <ul>{users.length}</ul>
    </div>
  );
}
