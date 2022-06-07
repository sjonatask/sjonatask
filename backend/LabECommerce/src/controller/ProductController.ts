import { Request, Response } from "express";
import { ProductBussines } from "../bussines/ProductBussines";


export class ProductController{
    create(req:Request, res:Response){
        try {
            const {name, price, imageUrl} = req.body

            const productBussines = new ProductBussines().create(name,price,imageUrl)

            res.status(200).send({message: "product registred"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
    
    async findProduct(req:Request, res:Response): Promise<any> {
        try {
            
            const order = req.query.order as string
            const search = req.query.search as string

            const productBussines = await new ProductBussines().findProduct(order,search)

            res.status(200).send(productBussines)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}