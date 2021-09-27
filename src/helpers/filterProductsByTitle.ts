import { IProduct } from '../dtos/IProduct'

export const filterProductsByTitle = (products: IProduct[], productName: string): IProduct[] => {
  const productNameArray = formatString(productName).split(' ')
  const filteredProducts = products.filter(product => {
    return productNameArray.every(word => formatString(product.title).includes(word))
  })
  return filteredProducts
}

const formatString = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}