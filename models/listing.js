const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:
            "https://unsplash.com/photos/lago-martianez-pools-in-puerto-de-la-cruz-tenerife-canary-islands-spain-Vm5EQ2pD0oE",
        set:(v)=>v===""?"https://unsplash.com/photos/lago-martianez-pools-in-puerto-de-la-cruz-tenerife-canary-islands-spain-Vm5EQ2pD0oE":v,
    },
    price:Number,
    location:String,
    country:String,
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;