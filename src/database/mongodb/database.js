import mongoose from "mongoose";
const uri = "mongodb+srv://user:123@desafiomb-xwfc4.mongodb.net/ProjetoLavourasIoT?retryWrites=true";

mongoose.connect(uri, {useNewUrlParser: true})
.then(result => {
    console.log("Connected");})
.catch(e => {
    console.log("ERROR");
});
