import { object, string, ref, number } from "yup";


export const registration = object({
    body: object({
        name: string().required("Name is required"),
        password: string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
        passwordConfirmation: string().oneOf(
            [ref("password"), null],
            "Passwords must match"
        ),
        email: string()
            .email("Must be a valid email")
            .required("Email is required"),
        moble: number().min(10, "Mobile 10 digit reauired")
    }),
});

export const login = object({
    body: object({
        password: string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
        email: string()
            .email("Must be a valid email")
            .required("Email is required"),
    }),
});