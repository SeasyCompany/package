import { IProduct } from '../dtos/IProduct'

export const sortProductsByPrice = (products: IProduct[]): IProduct[] => {
  const sortedProducts = products.sort((a, b) => a.price - b.price)
  return sortedProducts.splice(0, 30)
}
