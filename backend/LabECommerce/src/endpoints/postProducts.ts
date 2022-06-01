import { Express, Request, Response } from "express"
import { findUser } from "./querys/findUser";
import { insertProduct } from "./querys/insertProduct";
const { v4: uuidv4 } = require('uuid');

export const postProducts = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
        let id = uuidv4() as string
        let name = req.body.name as string
        let price = req.body.price as number
        let imageUrl = req.body.imageUrl as string
        
        // Checa se os campos estão preenchidos
        if(!name){
            errorCode = 400
            throw new Error("you must fill the field *name*")
        }
        if(!price){
            errorCode = 400
            throw new Error("you must fill the field *price*")
        }
        if(!imageUrl){
            errorCode = 400
            throw new Error("you must fill the field *imageUrl*")
        }

        insertProduct(id,name,price,imageUrl)

        res.status(200).send("product registered successfully")
    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}