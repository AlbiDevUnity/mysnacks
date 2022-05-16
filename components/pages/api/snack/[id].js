import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default function handler(req, res) {
    const { snackId } = req.query
    
    const snack = prisma.snack.findUnique({
        where:{
            id: snackId
        }
    });

    res.json(snack);
  }