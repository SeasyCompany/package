import { productsMock } from '../mocks/products'
import { filterProductsByTitle } from '../../src/helpers/filterProductsByTitle'

describe('filterProductsByPrice', () => {
  const products =
    it('should return filtered products', () => {
      const filteredProducts = filterProductsByTitle(productsMock, 'mi band 6')
      expect(filteredProducts.length).toEqual(1)
    })
})
