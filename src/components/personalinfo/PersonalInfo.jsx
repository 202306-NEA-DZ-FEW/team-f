const PersonalInfo = () => {
    return (
        <div className='flex lg:flex-cols-2 flex-wrap lg:flex-nowrap lg:ml-8 gap-8'>
            <div className='flex flex-wrap justify-center lg:w-64 '>
                <svg
                    className='lg:ml-8 mt-4 flex justify-center'
                    width={230}
                    height={230}
                >
                    <circle cx='111' cy='111' r='111' fill='#D8D8D8' />
                    <path
                        d='M110.816 38.2331C108.355 38.2331 105.925 38.5997 103.598 39.1826C102.236 39.5276 100.924 39.9807 99.6114 40.5118C99.107 40.7185 98.5911 40.8481 98.0935 41.0815C97.8869 41.1777 97.7289 41.3607 97.5241 41.4613C96.2894 42.0725 95.0807 42.7801 93.9165 43.5501C93.7524 43.6558 93.5088 43.6314 93.3465 43.74C93.0044 43.9748 92.7328 44.2516 92.3974 44.4992C91.444 45.1834 90.4432 45.8118 89.5487 46.5883C88.7332 47.3218 88.0332 48.2436 87.27 49.0566C84.6869 51.7054 82.4477 54.5078 80.6235 57.7922C77.4917 63.2817 75.1535 69.4621 74.1678 75.8315C73.6921 75.7312 73.2558 75.6954 72.8383 75.8315C69.6475 76.8706 68.8612 82.9319 70.9394 89.3134C72.159 93.0584 74.1879 96.0067 76.2563 97.6686C79.0351 108.471 84.9196 117.477 92.5869 123.116V129.381L86.5104 135.457L74.3574 141.534C64.5299 146.401 54.74 151.286 44.9241 156.154C39.4848 159.435 37.3801 165.876 37.8984 171.916C38.1516 175.72 36.7774 180.587 40.5569 183.121C44.1475 184.969 48.4314 183.765 52.3301 184.069C63.7333 184.063 75.1073 184.069 86.5104 184.069C102.729 184.075 118.904 184.069 135.122 184.069C149.506 184.069 163.846 184.094 178.229 184.069C182.896 183.741 184.19 178.813 183.734 174.954C183.82 169.291 184.154 162.947 179.748 158.621C176.151 154.963 171.035 153.517 166.647 151.025C160.2 147.835 153.717 144.724 147.275 141.534L135.122 135.457L129.046 129.381V123.116C136.715 117.477 142.597 108.471 145.38 97.6686C147.446 96.0061 149.475 93.0578 150.69 89.3134C152.769 82.9319 151.985 76.8706 148.795 75.8315C148.375 75.6954 147.944 75.7312 147.464 75.8315C146.479 69.4621 144.14 63.2817 141.011 57.7922C139.188 54.5078 136.945 51.7054 134.363 49.0566C133.597 48.2436 132.898 47.3218 132.084 46.5883C132.048 46.5549 131.932 46.6218 131.896 46.5883C129.514 44.4622 126.871 42.8273 124.112 41.4613C123.413 41.1197 122.732 40.8017 122.022 40.5118C121.511 40.3052 121.019 40.1214 120.502 39.9422C118.953 39.4045 117.367 38.8875 115.751 38.6129C115.629 38.5922 115.495 38.632 115.374 38.6129C113.861 38.3751 112.366 38.2164 110.816 38.2331Z'
                        fill='#3C4347'
                    />
                </svg>
                <div className='mt-4 text-xl lg:my-2 lg:ml-10'>
                    <span>Name Surname</span>
                    <p>Location</p>
                </div>
            </div>

            <div className='lg:w-2/3 h-64  m-6 bg-neutral-100 rounded-3xl lg:mt-6'>
                <div className='m-8 text-xl flex flex-col justify-evenly'>
                    <span className='my-1'>Name Surname</span>
                    <span className='my-1'>Location</span>
                    <span className='my-1'>Phone: 01122334455</span>
                    <span className='my-1'>Email: mail@mail.com</span>
                    <span className='my-1'>Language: EN</span>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;