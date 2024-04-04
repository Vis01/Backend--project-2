import mongoose,{Schema} from "mongoose";
const subscriptionschema= new Schema({
    subscribers:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    channnel:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

},{timestamps:true})

export const Subscription=mongoose.model("Subsciption",subscriptionschema);