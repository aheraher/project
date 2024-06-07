const { default: mongoose } = require("mongoose");

const contactSheama = new mongoose.Schema({
    email:String,
    message:String
})


const Contact = mongoose.models.Contact ||  mongoose.model("Contact",contactSheama)
export default Contact;