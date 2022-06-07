import { ProductDataBase } from "../data/ProductDataBase"
import { Product } from "../model/type"
import { generateId } from "../services/GenerateID"

export class ProductBussines{

    create (name:string, price:number, imageUrl:string){

        if(!name || !price || !imageUrl){
            throw new Error("you must fill these fild (name), (price) and (imageUrl)")
        }

        const id = generateId()

        const productDB = new ProductDataBase()
        .create(id,name,price,imageUrl)
    }

    async findProduct (order?:string, search?:string):Promise<Product[]>{
        const productDB = await new ProductDataBase()
        .find(order, search)

        return productDB
    }
}