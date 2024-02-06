const mongoose=require("mongoose")
const RegisterDetailSchema=new mongoose.Schema(
    {
        uname:String,
        email:String,
        pwd:String,
    },
    {
        collection:"RegisterDetails",
    }
);
mongoose.model("RegisterDetails",RegisterDetailSchema);