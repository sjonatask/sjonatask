import { Express, Request, Response } from "express"
import { findProduct } from "./querys/findProduct"

export const getProducts = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
        const order = req.query.order as string
        const search = req.query.search as string

        let result = await findProduct(order, search)

        res.status(200).send(result)
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}