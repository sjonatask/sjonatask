import { UserDataBase } from "../data/UserDataBase"
import { User } from "../model/type"
import { generateId } from "../services/GenerateID"
import { PurchaseBussines } from "./PurchaseBussines"


export class UserBussines {

    async create(name: string, password: string, email: string): Promise<void> {
        let errorCode = 400

        // Checa se o os campos estão todos preenchidos
        if (!name) {
            errorCode = 400
            throw new Error("you must fill the field *name*")
        }
        if (!password) {
            errorCode = 400
            throw new Error("you must fill the field *password*")
        }
        if (!email) {
            errorCode = 400
            throw new Error("you must fill the field *email*")
        }

        const id = generateId()

        const userDB = new UserDataBase()
        const users = await userDB.find()
        
        // Checa se o email passado ja esta registrado
        users.map((e: User) => {
            if (e.email === email) {
                errorCode = 400
                throw new Error("email already registred")
            }
        })

        userDB.create(id, name, password, email)
    }

    async find(): Promise<any> {
        const userDB = new UserDataBase()
        const purchase = new PurchaseBussines()

        let result = await userDB.find().then(purchase.insertUserPurchase)
        return result
    }
}