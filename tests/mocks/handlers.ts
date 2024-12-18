import {http, HttpResponse} from 'msw';
import { products } from './data';

export const handlers = [
  http.get('/categories',()=>{
    return HttpResponse.json(products);
  }),

  http.get('/products',()=>{
    return HttpResponse.json(products);
  }),
  
  http.get('/products/:id',({ params })=>{
    const id = params.id;
    const product = products.find((product)=> String(product.id) === id);

    if (!product) return new HttpResponse(null, { status: 404 })
 
    return HttpResponse.json(product);
  })
]