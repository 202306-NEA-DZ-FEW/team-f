import clsx from "clsx";
const Input = ({
    name,
    type,
    labelText,
    placeholder,
    register,
    requiredMessage,
    validation,
    errors,
}) => {
    return (
        <>
            <label
                htmlFor={name}
                className='block text-base font-light text-slate-700 -mb-4'
            >
                {labelText}
            </label>
            <input
                {...register(name, {
                    required: requiredMessage,
                    ...validation,
                })}
                placeholder={placeholder}
                type={type}
                className={clsx(
                    "p-2 block w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green",
                    {
                        "border-red": errors[name],
                        "border-slate-300": !errors[name],
                    },
                )}
            />
            {errors[name] && (
                <span className='text-red'>{errors[name].message}</span>
            )}
        </>
    );
};

export default Input;
