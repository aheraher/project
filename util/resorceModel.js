const { default: mongoose } = require("mongoose");

const resorceSheama = new mongoose.Schema({
    name:String,
    link:String
})


const Resorce =  mongoose.models.Resorce || mongoose.model("Resorce",resorceSheama)
export default Resorce;

