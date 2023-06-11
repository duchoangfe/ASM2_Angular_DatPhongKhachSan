import dotenv from 'dotenv';
import bookingroom from '../models/bookingroom';
import { bookingroomSchema } from '../schemas/bookingroom';
import Category from '../models/category';
dotenv.config();

export const create = async (req, res) => {
  try {
    const { error } = bookingroomSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const room = await bookingroom.create(req.body);
    await Category.findByIdAndUpdate(room.categoryId, {
      $addToSet: { rooms: room._id },
    });
    if (!room) {
      return res.json({
        message: 'Đặt Phòng Không Thành Công',
      });
    }
    return res.json({
      message: 'Đặt Phòng thành công',
      room,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
