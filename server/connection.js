const mongoose =require('mongoose');
require('dotenv').config()

const username=process.env.USER_NAME
const password=process.env.PASS_WORD

const Connect = async()=>{
    const url=`mongodb://${username}:${password}@ac-w3gvmeb-shard-00-00.o0y3kco.mongodb.net:27017,ac-w3gvmeb-shard-00-01.o0y3kco.mongodb.net:27017,ac-w3gvmeb-shard-00-02.o0y3kco.mongodb.net:27017/?ssl=true&replicaSet=atlas-cwhwmh-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(url, { useNewUrlParser: true,
            useNewUrlParser: true,
            useUnifiedTopology: true, });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}
module.exports=Connect