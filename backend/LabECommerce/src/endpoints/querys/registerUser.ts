import { connection } from "../../data/connection"

export async function registerUser(id:string, name:string, email:string, password:string):Promise<void> {
    const result = await connection("labecommerce_users")
    .insert({
        "id": id,
        "name": name,
        "email": email,
        "password": password
    })

    return
}