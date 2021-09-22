import { IProduct } from '../dtos/IProduct'

export const sortProductsByPrice = (products: IProduct[]): IProduct[] => {
  return products.sort((a, b) => a.price - b.price)
}
