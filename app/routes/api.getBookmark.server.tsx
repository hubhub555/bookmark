import { PrismaClient } from "@prisma/client";
import { LoaderFunction, json } from "@remix-run/node";
import { AuthUserType } from "~/type/AuthUser";

type LoaderData = {
  user: AuthUserType;
};

export const loader: LoaderFunction = async () => {
  const prisma = new PrismaClient();
  const user = await prisma.users.findFirst();
  return json<LoaderData>(user);
};
