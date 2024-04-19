import { User } from "../types";

const Joi = require('joi');

const JoiPhoneNumber = Joi.extend(require('joi-phone-number'));

export const validateSignup = async (data?: User) => {
    const schema = Joi.object({
        firstname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        lastname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: false }),
        phone: JoiPhoneNumber.string()
            .phoneNumber({ defaultCountry: 'KE', format: 'e164' }),
        bio: Joi.string()
            .required(),
        vibe: Joi.array().items(Joi.string()),
        inspiration: Joi.string().required(),
        timezone: Joi.string(),
    })
    try {
        const value = await schema.validateAsync(data);
        return { status: true }
    }
    catch (err: any) {
        return { status: false, message: err.details[0].message }
    }
}
