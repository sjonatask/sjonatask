import { connection } from "../../data/connection"

export async function insertPurchases(id:string, userId:string, productId:string, quantity:number, totalPrice:number):Promise<void> {
    const result = await connection("labecommerce_purchases")
    .insert({
        "id": id,
        "user_id": userId,
        "product_id": productId,
        "quantity": quantity,
        "total_price": totalPrice
    })

    return
}