import { app } from "./app";
import { ProductController } from "./controller/ProductController";
import { PurchaseController } from "./controller/PurchaseController";
import { UserController } from "./controller/UserController";

const userController = new UserController()
const productController = new ProductController()
const purchaseController = new PurchaseController()

app.get("/users", userController.find)

app.get("/products", productController.findProduct)

app.post("/users", userController.create)

app.post("/products", productController.create)

app.post("/purchase", purchaseController.insert)
