import { Express, Request, Response } from "express"
import { findUser } from "./querys/findUser";
import { findProduct } from "./querys/findProduct";
import { insertPurchases } from "./querys/insertPurchases";
import { Product, User } from "../type";
const { v4: uuidv4 } = require('uuid');

export const postPurchase = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
        const id = uuidv4()
        const {userId, productId, quantity} = req.body
        let totalPrice = 0
        
        // procura na tabela do BD o produto selecionado e calcular o preço total
        let allProduct = await findProduct()
        const productSelected = allProduct.find((e:Product) => {
            totalPrice = e.price * quantity
            return productId === e.id 
        })
        
        // Checa se o produto id enviado é valido
        if(!productSelected){
            errorCode = 404
            throw new Error("product not found")
        }

        // checa na tabela se o id do usuario é valido
        const allUser = await findUser()
        const userSelected = allUser.find((e:User) => {
            return e.id === userId
        })
        if(!userSelected){
            errorCode = 400
            throw new Error("user ID invalid")
        }

        insertPurchases(id, userId, productId, quantity, totalPrice)
        
        res.status(201).send("finalized purchase")
    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}