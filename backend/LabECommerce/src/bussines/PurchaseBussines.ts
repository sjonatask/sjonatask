import { PuchaseDataBase } from "../data/PurchaseDataBase"
import { User } from "../model/type"

export class PurchaseBussines {

    async insertUserPurchase (users: User[]): Promise<any> {
        const purchase = new PuchaseDataBase()
    
        for (let user of users) {
            user.purchase = await purchase.find(user.id)
        }
    
        return users
    }
}
