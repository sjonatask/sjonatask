import { connection } from "../../data/connection"

export async function findUser():Promise<any> {
    const result = await connection("labecommerce_users")
    
    const teste = await connection("labecommerce_purchases")
    .select(
        "labecommerce_products.product_name", "labecommerce_purchases.quantity",
        "labecommerce_purchases.total_price", "labecommerce_users.email", 
        "labecommerce_users.id", "labecommerce_users.name"
    )
    .innerJoin(
       "labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id"
    )
    .innerJoin(
        "labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id"
    )

    return result
}