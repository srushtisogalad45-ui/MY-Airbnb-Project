const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
main()
.then(()=>{
    console.log("connected to DB");
})