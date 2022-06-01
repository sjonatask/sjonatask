import { User } from "../../type"
import { findUsersPurchases } from "./findUsersPurchases"


export default async function (users: User[]): Promise<any> {
    for (let user of users) {
        user.purchase = await findUsersPurchases(user.id)
    }

    return users
}