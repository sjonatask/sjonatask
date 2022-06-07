import { Product } from "../model/type"
import { DataBase } from "./DataBase"

export class ProductDataBase extends DataBase{
    private static TABLE_NAME = "labecommerce_products"

    async find(order?: string, search?:string):Promise<Product[]> {
        let result
        if(!order && !search){
            result = await ProductDataBase.connection(ProductDataBase.TABLE_NAME) 
    
        }else if(search){
            result = await ProductDataBase.connection(ProductDataBase.TABLE_NAME) 
            .where("product_name", "like", `%${search}%`)
    
        }else{
            result = await ProductDataBase.connection(ProductDataBase.TABLE_NAME) 
            .orderBy("product_name", order)
        }
    
        return result
    }

    async create(id:string, name:string, price:number, imageUrl:string):Promise<void> {
        await ProductDataBase.connection
        .insert({
            "id": id,
            "product_name": name,
            "price": price,
            "image_url": imageUrl
        })
        .into(ProductDataBase.TABLE_NAME)
    }
}