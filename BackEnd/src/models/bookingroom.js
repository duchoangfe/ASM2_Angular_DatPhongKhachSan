import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const bookingroom = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
    user: {
      type: String
    },
    email: {
      type: String
    },
    checkInDate: {
      type: String
    },
    checkOutDate: {
      type: String
    },
    numberOfGuests: {
      type: Number
    },
    brand: {
      type: mongoose.Types.ObjectId,
      ref: 'Brand',
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

bookingroom.plugin(mongoosePaginate);
export default mongoose.model('bookingroom', bookingroom);
