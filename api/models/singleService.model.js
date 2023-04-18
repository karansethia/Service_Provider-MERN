import mongoose from 'mongoose';
const { Schema } = mongoose;

const singleServiceSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  totalStars: {
    type: Number,
    default: 0
  },
  startNumber: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  coverImg: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    required: false
  },
  shortTitle: {
    type: String,
    required: true
  },  
  shortDesc: {
    type: String,
    required: true
  },  
  deliveryTime: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: true
  }
}    
,{
    timestamps: true
});

export default mongoose.model('SingleService',singleServiceSchema)