import { IProduct } from '../dtos/IProduct'

const wordsToRemove = ['de', 'da', 'do', 'para']

export const filterProductsByDetails = (products: IProduct[], productName: string): IProduct[] => {
  let productNameArray = formatString(productName).split(' ')
  wordsToRemove.forEach(word => {
    productNameArray = productNameArray.filter(item => item !== word);
  })

  const filteredProducts = products.filter(product => {
    const stringToCompare = `${product.title + JSON.stringify(product.variations)}`
    return productNameArray.every(word => formatString(stringToCompare).includes(word))
  })
  return filteredProducts
}

export const formatString = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}