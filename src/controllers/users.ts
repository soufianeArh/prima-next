import {Response, Request, NextFunction} from "express"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req:Request, res: Response, next:NextFunction)=>{
      try {
            const users = await prisma.user.findFirstOrThrow();
            res.status(200).send(users)
      }catch (err){
            next(err)
      }
}