export interface IUserRequest {
    name: string
    age: number
    cpf: string
    email: string
    password: string
}

export interface IUser {
    name: string
    age: number
    cpf: string
    email: string
    password: string
    addressId: string
    objectId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IUserId {
    id: string
}

export interface IUserUpdate {
    id: string
    name: string
    age: number
    cpf: string
    email: string
    password: string
}