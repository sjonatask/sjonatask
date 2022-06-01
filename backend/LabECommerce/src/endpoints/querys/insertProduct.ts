import { connection } from "../../data/connection"

export async function insertProduct(id:string, name:string, price:number, imageUrl:string):Promise<void> {
    const result = await connection("labecommerce_products")
    .insert({
        "id": id,
        "product_name": name,
        "price": price,
        "image_url": imageUrl
    })

    return 
}