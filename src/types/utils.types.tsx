import { Product } from "./product.type"

export interface SuccessResponse<Data> {
    message: string
    data: Data
}

export interface SuccessResponseProduct {
    data: Product[]
}

export interface ErrorResponse<Data> {
    message: string
    data?: Data
}

// Đây là cú pháp `-?` sẽ loại bỏ undefined của key optional
export type NoUndefinedField<T> = {
    [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}