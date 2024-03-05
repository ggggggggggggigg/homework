import mongoose from 'mongoose'

const urlschema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    branch: String
  },
  { timestamps: true}
)


export const  Url = mongoose.model('url', urlschema)
