import { User } from "../model/type"
import { DataBase } from "./dataBase"

export class UserDataBase extends DataBase{
    private static TABLE_NAME = "labecommerce_users"

    async create(id:string, name:string, email:string, password:string):Promise<void> {
        await UserDataBase.connection
        .insert({
            "id": id,
            "name": name,
            "email": email,
            "password": password
        })
        .into(UserDataBase.TABLE_NAME)
    }

    async find():Promise<User[]> {
        const result = await UserDataBase.connection.from(UserDataBase.TABLE_NAME)
        
        return result
    }
}