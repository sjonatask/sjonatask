import { connection } from "../../data/connection"

export async function findProduct(order?: string, search?:string):Promise<any> {

    let result
    if(!order && !search){
        result = await connection("labecommerce_products") 

    }else if(search){
        result = await connection("labecommerce_products")
        .where("product_name", "like", `%${search}%`)

    }else{
        result = await connection("labecommerce_products") 
        .orderBy("product_name", order)
    }

    return result
}