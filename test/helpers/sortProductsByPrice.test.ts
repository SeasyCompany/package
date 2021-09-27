import { sortProductsByPrice } from '../../src/helpers/sortProductsByPrice'
import { productsMock } from '../mocks/products'

describe('sortProductsByPrice', () => {
  it('should return sorted products', () => {
    const sortedProducts = sortProductsByPrice(productsMock)
    expect(sortedProducts[0].price).toEqual(10)
  })
})
