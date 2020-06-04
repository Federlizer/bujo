import * as Joi from '@hapi/joi';

const createTaskHttpBodySchema = Joi.object({
  text: Joi.string()
    .min(1)
    .max(500)
    .required(),

  date: Joi.date(),

  monthly: Joi.boolean(),
});

export default createTaskHttpBodySchema;
