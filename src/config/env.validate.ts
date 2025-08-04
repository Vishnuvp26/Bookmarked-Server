import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
    PORT: Joi.number().default(3000),
    CLIENT_URL: Joi.string().uri().required(),
    DATABASE_URL: Joi.string().uri().required()
});