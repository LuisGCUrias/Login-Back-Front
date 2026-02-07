// VALIDADORES
const Joi = require("joi")


//ESQUEMA DE VALIDACION.
const singupSchema = Joi.object({
    username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .trim()
    .empty('')
    .required(),

    password: Joi.string()
    .pattern(/^[a-zA-Z0-9@$!%*?.&]{5,30}$/)
    .trim()
    .required(),

    email: Joi.string()
    .email()
    .empty('')
    .trim()
    .required(),
})

module.exports = singupSchema;