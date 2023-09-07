 const express=require('express')
 const router=express.Router()
 const{ deletelist,pascalCase,kebabCase,camelCase,snakeCase,getList}=require('./model') 
 const app=express()

 //middileware
 app.use(express.json())

 //routing API's
 router.route('/').get(getList)
 router.route('/pascal').post(pascalCase)
 router.route('/kebab').post(kebabCase)
 router.route('/camel').post(camelCase)
 router.route('/snake').post(snakeCase)
 router.route('/:id').delete(deletelist)

 module.exports=router
