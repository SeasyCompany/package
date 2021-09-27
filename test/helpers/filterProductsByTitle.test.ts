import { productsMock } from '../mocks/products'
import { filterProductsByDetails } from '../../src/helpers/filterProductsByDetails'

describe('filterProductsByPrice', () => {
  const products =
    it('should return filtered products', () => {
      const filteredProducts = filterProductsByDetails(productsMock, 'mi band 6 top')
      expect(filteredProducts.length).toEqual(1)
    })
})
