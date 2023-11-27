export const signupInputs = (func) => {
    return [
        {
            name: "name",
            type: "text",
            labelText: "Your Name",
            placeholder: "Your Name",
            requiredMessage: "Enter a name please",
            validation: {
                maxLength: {
                    value: 30,
                    message: "30 character max",
                },
            },
        },
        {
            name: "email",
            type: "email",
            labelText: "Email",
            placeholder: "mail@mail.com",
            requiredMessage: "Email is required",
            validation: {
                maxLength: (v) =>
                    v.length <= 50 ||
                    "The email should have at most 50 characters",
                matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
            },
        },
        {
            name: "password",
            type: "password",
            labelText: "Your Password",
            placeholder: "Enter your password",
            requiredMessage: "Enter a password please",
            validation: {
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                },
                maxLength: {
                    value: 30,
                    message: "30 characters max",
                },
            },
        },
        {
            name: "confirmPassword",
            type: "password",
            labelText: "Confirm password",
            placeholder: "Enter your password again",
            requiredMessage: "Enter a password please",
            validation: {
                validate: (match) => {
                    const password = func("password");
                    return match === password || "Passwords should match!";
                },
            },
        },
        {
            name: "location",
            type: "text",
            labelText: "Your Location",
            placeholder: "Enter your location",
            requiredMessage: "Enter a location please",
            validatiophonen: {
                maxLength: {
                    value: 50,
                    message: "50 characters max",
                },
            },
        },
        {
            name: "phone",
            type: "number",
            labelText: "Your Phone Number",
            placeholder: "Enter your phone number",
            requiredMessage: "Enter a phone number please",
            validation: {
                pattern: {
                    value: /^\d{10}$/,
                    message: "Enter a valid 10-digit phone number",
                },
            },
        },
    ];
};
