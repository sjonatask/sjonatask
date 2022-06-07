export type User = {
    id: string,
    name: string,
    email: string,
    password: string
    purchase?: [{}]
}

export type Product ={
    id: string,
    name: string,
    price: number,
    imageUrl: string
}