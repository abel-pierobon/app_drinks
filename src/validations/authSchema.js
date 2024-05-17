import { object, string, ref } from "yup"
export const signupSchema = object().shape({
    email: string().required("Email es requerido").email("email no es valido"),
    password: string()
        .required("Password es requerido")
        .min(6, "Password debe contener al menos 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "Las contraseñas no coinciden")
        .required(),
})