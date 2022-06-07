import { Request, Response } from "express";
import { PurchaseBussines } from "../bussines/PurchaseBussines";



export class PurchaseController{
    async insert(req:Request, res:Response):Promise<void>{
        try {
            const {userId, productId, quantity} = req.body

            const purchaseBussines = new PurchaseBussines().insert(userId,productId,quantity)

            res.status(200).send({message: "purchase made"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
    
}