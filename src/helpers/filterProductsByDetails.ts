import { IProduct } from '../dtos/IProduct'

export const filterProductsByDetails = (products: IProduct[], productName: string): IProduct[] => {
  const productNameArray = formatString(productName).split(' ')
  const filteredProducts = products.filter(product => {
    const stringToCompare = `${product.title + JSON.stringify(product.variations)}`
    return productNameArray.every(word => formatString(stringToCompare).includes(word))
  })
  return filteredProducts
}

export const formatString = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}