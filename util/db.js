const { default: mongoose } = require("mongoose");


const ConnectMongo = async ()=>{
try {
    await mongoose.connect(process.env.MongoDB)
    console.log("Connection Done");
} catch (error) {
    
    console.log("Error come in connection");
}
}


export default ConnectMongo; 

