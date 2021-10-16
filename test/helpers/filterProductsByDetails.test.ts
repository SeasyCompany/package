import { productsMock } from '../mocks/products'
import { filterProductsByDetails } from '../../src/helpers/filterProductsByDetails'

describe('filterProductsByPrice', () => {
    it('should return filtered products', () => {
      const filteredProducts = filterProductsByDetails(productsMock, 'mi band 6 top da xiaomi')
      expect(filteredProducts.length).toEqual(1)
    })
})
