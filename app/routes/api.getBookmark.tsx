import { PrismaClient } from "@prisma/client";
import { LoaderFunction, json } from "@remix-run/node";
import { UsersType } from "~/type/Users";

export const loader: LoaderFunction = async () => {
  try {
    const prisma = new PrismaClient();
    const user = await prisma.users.findFirst();

    await prisma.$disconnect();
    if (!user) {
      throw new Error("Internal Server Error");
    }

    return json<UsersType>(user);
  } catch (e) {
    return json({ message: "Internal Server Error" }, { status: 500 });
  }
};
