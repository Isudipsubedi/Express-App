import mongoose from "mongoose";

//created a schema
const personSchema = new mongoose.schema({
    name: String,
    age: Number,
    email: String,
})

//Now using this schema we need to create a model

// const Person = mongoose.model("Person", personSchema)

//we want to use this model in another file: export key word
export const Person = mongoose.model("Person", personSchema)