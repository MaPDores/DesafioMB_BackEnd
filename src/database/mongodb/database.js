import mongoose from "mongoose";
const uri = "mongodb+srv://user:123@desafiomb-xwfc4.mongodb.net/ProjetoLavourasIoT?retryWrites=true";

mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false})
.then(result => {
    console.log("Connected to MongoDB!");})
.catch(e => {
    console.log("ERROR");
});