import { Express, Request, Response } from "express"
import { User } from "../type"
import { findUser } from "./querys/findUser"
import {findUsersPurchases} from "./querys/findUsersPurchases"

export const getUsersPurchase = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
        const userId = req.params.user_id

        // checa na tabela se o id do usuario é valido
        const allUser = await findUser()
        const userSelected = allUser.find((e:User) => {
            return e.id === userId
        })
        if(!userSelected){
            errorCode = 404
            throw new Error("user not found")
        }

        let result = await findUsersPurchases(userId)

        res.status(200).send(result)
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}