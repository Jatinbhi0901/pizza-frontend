import * as yup from "yup";

const profileschema=yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email : yup.string().required(),
    contact: yup.string().required().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/),
    // dob: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    address: yup.string().required()
})

export default profileschema;