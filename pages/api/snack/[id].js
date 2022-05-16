import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    const { id } = req.query
    const snack = await prisma.snack.findUnique({
        where:{
            id: id
        }
    });

    res.json(snack);
  }