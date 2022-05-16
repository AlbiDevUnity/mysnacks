import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    const snack = await prisma.snack.findMany();

    res.json(snack);
  }