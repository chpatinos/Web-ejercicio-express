const joi = require("joi");

const schema = joi.object({
  message: joi.string().min(5).required(),
  author: joi.string().required().pattern(new RegExp("^[a-zA-Z]+ [a-zA-Z]+$")),
  ts: joi.number()
});

exports.messageSchema = schema;