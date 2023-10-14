const SignUpForm = () => {
    return (
        <div className='flex justify-between items-center flex-col text-[#3C4347] bg-[#F1F1F1] sm:w-auto'>
            <h1 className='font-bold text-xl my-8'>
                Sign Up
            </h1>
            <form className='flex flex-col w-[824px]'>
                <div className='w-auto'>
                    <label className='ml-5' htmlFor='name'>
                        Name
                    </label>
                    <input
                        className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3  shadow-md text-sm'
                        type='text'
                        id='name'
                        placeholder='Name Surename'
                        autoComplete='off'
                    />
                </div>
                <div className='w-auto my-4'>
                    <label className='ml-5' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                        type='text'
                        id='email'
                        placeholder='mail@mail.com'
                        autoComplete='off'
                    />
                </div>
                <div className='w-auto my-4'>
                    <label className='ml-5' htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                        type='password'
                        id='password'
                        placeholder='at least 8 characters'
                    />
                </div>
                <div className='w-auto my-4'>
                    <label className='ml-5' htmlFor='password'>
                        Confirm password
                    </label>
                    <input
                        className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                        type='password'
                        id='password'
                        placeholder='at least 8 characters'
                    />
                </div>
                <div className='w-auto my-4'>
                    <label className='ml-5' htmlFor='phone'>
                        Phone
                    </label>
                    <input
                        className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 placeholder-[#9CA2A9] shadow-md text-sm'
                        type='number'
                        id='phone'
                        placeholder='+1122334455'
                        autoComplete='off'
                    />
                </div>
                <div className='w-auto my-4'>
                    <label className='ml-5' htmlFor='location'>
                        Location
                    </label>
                    <select
                        id='location'
                        placeholder='Select location'
                        className='rounded-2xl border border-[#d3d5e2] mt-1 w-full p-3 shadow-md text-sm'
                    ></select>
                </div>
            </form>
            <button className='bg-green text-white border rounded-2xl w-md w-72 py-2.5 px-5 mt-4 font-medium'>
                Sign Up
            </button>
            <span className='my-10'>Sign Up With</span>
        </div>
    );
};
export default SignUpForm;
