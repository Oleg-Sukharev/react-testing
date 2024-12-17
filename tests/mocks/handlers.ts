import {http, HttpResponse} from 'msw';

export const handlers = [
  http.get('/categories',()=>{
    return HttpResponse.json([
      {id:1, name: 'Test 1'},
      {id:2, name: 'Test 2'},
      {id:3, name: 'Test 3'},
    ])
  })
]