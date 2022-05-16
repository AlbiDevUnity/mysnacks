import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
      }

      console.log(req.body)
      const snack = await prisma.snack.create({
        data: req.body
      })

    res.json(snack);
  }