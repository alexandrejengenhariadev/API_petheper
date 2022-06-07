

import Route from '@ioc:Adonis/Core/Route'


Route.group(()=>{
  Route.get('/', async () => {
    return { hello: 'world' }
  })
 
  Route.resource("/ongs","OngsController").apiOnly()
 
 
  
}).prefix('/api')