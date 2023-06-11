import joi from 'joi';
export const bookingroomSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string(),
  img: joi.string(),
  user: joi.string().required(),
  checkInDate: joi.string().required(),
  checkOutDate: joi.string().required(),
  numberOfGuests: joi.string().required(),
});
