import { PurchaseDataBase } from "../data/PurchaseDataBase"
import { Product, User } from "../model/type"
import { generateId } from "../services/GenerateID"
import { ProductBussines } from "./ProductBussines"
import { UserBussines } from "./UserBussines"

export class PurchaseBussines {
    async insert(userId:string, productId:string, quantity:number):Promise<void>{
        let totalPrice = 0
        const purchaseDB = await new PurchaseDataBase()

        // procura na tabela do BD o produto selecionado e calcular o preço total
        let allProduct = await new ProductBussines().findProduct()
        const productSelected = allProduct.find((e:Product) => {
            totalPrice = e.price * quantity
            return productId === e.id 
        })
        
        // Checa se id do produto enviado é valido
        if(!productSelected){
            throw new Error("product not found")
        }

        // checa na tabela se o id do usuario é valido
        const allUser = await new UserBussines().find()
        const userSelected = allUser.find((e:User) => {
            return e.id === userId
        })
        if(!userSelected){
            throw new Error("user ID invalid")
        }

        const id = generateId()

        purchaseDB.create(id, userId, productId, quantity, totalPrice)
    } 
}
