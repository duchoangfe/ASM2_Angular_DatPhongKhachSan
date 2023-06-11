import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const bookingroom = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String
    },
    roomId: {
      type: mongoose.Types.ObjectId,
            ref: "Room",
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
