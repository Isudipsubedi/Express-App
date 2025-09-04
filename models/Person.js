import mongoose from "mongoose";

//created a schema
const personSchema = new mongoose.Schema({
    name: {type: String, required:true},
    age: {type: Number, required:true},
    email: {type: String, required:true, unique:true},
    userOrder: {type:Object, default:{}}
}, {timestamps: true, minimize:false})

//Now using this schema we need to create a model

// const Person = mongoose.model("Person", personSchema)

//we want to use this model in another file: export key word
export const Person = mongoose.model("Person", personSchema);