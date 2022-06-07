import { Request, Response } from "express";
import { UserBussines } from "../bussines/UserBussines";

export class UserController{

    async find (req:Request, res:Response):Promise<any>{
        try {

            const userBussines = await new UserBussines().find()

            res.status(200).send(userBussines)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
      
    }

    async create (req:Request, res:Response):Promise<void>{
        try {
            const {name, password, email} = req.body

            const userBussines= new UserBussines().create(name,password,email)

            res.status(200).send(userBussines)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

}
