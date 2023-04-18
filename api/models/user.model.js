import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type:String,
    required: true,
    unique
    },
  email: {
    type:String,
    required: true,
    unique
    },
  password: {
    type:String,
    required: true
    },
  img: {
    type:String,
    required: false
    },
  desc: {
    type:String,
    required: false
    },
  isSeller: {
    type:Boolean,
    default: false
    },
  fullAddress: {
    type:String,
    required: true
    },
  city: {
    type:String,
    required: false
    }
},{
    timestamps: true
});

export default mongoose.model('User',userSchema)