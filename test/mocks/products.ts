import { IProduct } from "../../src/dtos/IProduct";

export const productsMock: IProduct[] = [
  {
    url: 'url',
    price: 10,
    image: 'image',
    location: 'location',
    marketplace: 'marketplace',
    title: 'smártwatçh MI bând 5',
    variations: [
      {
        name: 'variation',
        options: ['option']
      }
    ] 
  },
  {
    url: 'url',
    price: 20,
    image: 'image',
    location: 'location',
    marketplace: 'marketplace',
    title: 'smártwatçh MI bând 6',
    variations: [
      {
        name: 'variation',
        options: ['top']
      }
    ] 
  }
]