import { User } from "../model/type"
import { PurchaseDataBase } from "../data/PurchaseDataBase"


export default async function (users: User[]): Promise<any> {
    const purchase = new PurchaseDataBase()

    for (let user of users) {
        user.purchase = await purchase.findUserPurchase(user.id)
    }

    return users
}