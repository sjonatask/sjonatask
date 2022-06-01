import { connection } from "../../data/connection"

export async function findUsersPurchases(userId: string):Promise<any> {
 
    const result = await connection("labecommerce_purchases")
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

    return result
}