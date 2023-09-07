const mongoose=require('mongoose')

const Case = new mongoose.Schema({
    listing: {
        type: String,
        required: true
    },
})


module.exports=mongoose.model('converter', Case);