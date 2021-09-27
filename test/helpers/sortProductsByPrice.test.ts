import { sortProductsByPrice } from '../../src/helpers/sortProductsByPrice'
import { IProduct } from '../../src/dtos/IProduct'

describe('sortProductsByPrice', () => {
  const products: IProduct[] = [
    {
      url: 'url',
      price: 10,
      image: 'image',
      location: 'location',
      marketplace: 'marketplace',
      title: 'product'
    },
    {
      url: 'url',
      price: 20,
      image: 'image',
      location: 'location',
      marketplace: 'marketplace',
      title: 'product'
    }
  ]
  it('should return sorted products', () => {
    const sortedProducts = sortProductsByPrice(products)
    expect(sortedProducts[0].price).toEqual(10)
  })
})
