import joi from 'joi';
export const bookingroomSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string(),
  img: joi.string(),
  categoryId: joi.string().required(),
});
