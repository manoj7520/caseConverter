const Case=require('./schemma')

const getList=('/',async(req,res)=>{
     const gettingListing= await Case.find()
    return res.json(gettingListing)
})
//snakeCase
const snakeCase=('/',async (req,res)=>{
  try {
    const repeateddata= await Case.findOne({listing:req.body.listing})
    if(repeateddata){
     return   res.status(400).send("same data already given")
    }
    const data = new Case({listing:req.body.listing})    
    const savedata = await data.save();
    res.json(savedata)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create item' });
  } 
})

//camelCase
const camelCase=('/',async (req,res)=>{
  try {
    const repeateddata= await Case.findOne({listing:req.body.listing})
    if(repeateddata){
     return   res.status(400).send("same data already given")
    }
    const data = new Case({listing:req.body.listing})    
    const savedata = await data.save();
    res.json(savedata)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create item' });
  } 
})

//kebabCase
const kebabCase=('/',async (req,res)=>{
  try {
    const repeateddata= await Case.findOne({listing:req.body.listing})
    if(repeateddata){
     return   res.status(400).send("same data already given")
    }
    const data = new Case({listing:req.body.listing})    
    const savedata = await data.save();
    res.json(savedata)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create item' });
  } 
})

//pascalCase
const pascalCase=('/',async (req,res)=>{
  try {
    const repeateddata= await Case.findOne({listing:req.body.listing})
    if(repeateddata){
     return   res.status(400).send("same data already given")
    }
    const data = new Case({listing:req.body.listing})    
    const savedata = await data.save();
    res.json(savedata)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create item' });
  } 
})

//deleting 
const deletelist=('/',async(req,res)=>{
    try{
        const ids=req.params.id
        console.log(req)
       const  deletedata= await Case.findByIdAndDelete(ids)
       //if there is no id matched
       if (!deletedata) {
           res.status(404).json({ error: 'Data not found.' });
           return;
        }
          res.json({message:"data is deleted successfully"})
    }
    catch(err){
         res.status(500).send(err.message)
    }
})   

module.exports={
    deletelist,
    pascalCase,
    kebabCase,
    camelCase,
    snakeCase,
    getList
}