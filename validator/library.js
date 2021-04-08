const Joi = require("joi");

const libraryValidator = Joi.object({
  bookName: Joi.string().required(),
  author: Joi.string(),
});

module.exports = {
  libraryValidator,
};
