import { DataBase } from "./dataBase"

export class PuchaseDataBase extends DataBase{
    private static TABLE_NAME = "labecommerce_purchases"

    async create(id:string, userId:string, productId:string, quantity:number, totalPrice:number):Promise<void> {
        await PuchaseDataBase.connection
        .insert({
            "id": id,
            "user_id": userId,
            "product_id": productId,
            "quantity": quantity,
            "total_price": totalPrice
        })
        .into(PuchaseDataBase.TABLE_NAME)
    }

    async find(userId: string):Promise<any> {

        const result = await PuchaseDataBase.connection
        .select(
            "labecommerce_products.product_name", "labecommerce_purchases.quantity",
            "labecommerce_products.price", "labecommerce_purchases.total_price"
        )
        .innerJoin(
           "labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id"
        )
        .innerJoin(
            "labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id"
        )
        .where("labecommerce_users.id", userId)
        .from(PuchaseDataBase.TABLE_NAME)
        return result
    }
}