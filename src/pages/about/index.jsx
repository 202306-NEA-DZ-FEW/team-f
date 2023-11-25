import Image from "next/image";

import DeveloperAvatar from "@/components/developeravatar/DeveloperAvatar";

function AboutPage() {
    return (
        <section>
            <div className='bg-gradient-to-tr from-lime-400 via-white to-white'>
                <div className='sm:flex flex flex-row items-center max-w-screen-xl flex-wrap-reverse p-10 lg:p-0'>
                    <div className='sm:w-1/2 lg:pb-24 pb-16 pt-20 lg:pl-32 pl-1'>
                        <div className='display block lg:h-80 lg:w-96 max-w-screen-xl max-h-96'>
                            <Image
                                className='w-10/12 h-96 blur-sm drop-shadow-2xl flex items-center justify-center'
                                src='/images/aboutus.png'
                                width={500}
                                height={500}
                                alt='hero'
                            />
                        </div>
                    </div>
                    <div className='sm:w-1/2 p-5'>
                        <div className='text'>
                            <span className='text-gray-500 border-b-2 border-lime-600 uppercase'>
                                About us
                            </span>

                            <h2 className='my-4 font-bold text-3xl  sm:text-4xl '>
                                Who{" "}
                                <span className='text-lime-600'>We Are</span>
                            </h2>
                            <p className='text-gray-700'>
                                Welcome to Let&apos;s Share - where sharing is
                                caring! In our community, we believe in the
                                heartwarming essence of sharing daily
                                essentials. Extra food, lovely clothes, or cozy
                                furniture - at Let&apos;s Share, it&apos;s about
                                connecting and making a positive impact right
                                where you are. Let&apos;s transform our region
                                into a haven of shared moments. Join Let&apos;s
                                Share, where sharing isn&apos;t just a choice;
                                it&apos;s a way of life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-br from-lime-400 via-white to-white'>
                <div className='flex flex-wrap justify-center mb-20'>
                    <div className='text-center w-full mb-4'>
                        <h1 className='text-3xl font-bold p-12'>Our Team</h1>
                    </div>
                    {/* Developer 1 */}
                    <DeveloperAvatar
                        name='Darine Tag'
                        avatarUrl='/images/developer1.png'
                        description='Visionary creator of seamless, stunning user experiences.'
                        href='https://www.linkedin.com/in/darine-tag/'
                    />
                    {/* Developer 2 */}
                    <DeveloperAvatar
                        name='Hadj Said Bouras'
                        avatarUrl='/images/developer2.jfif'
                        description='Meticulous architect, crafting clean, efficient, pixel-perfect interfaces.'
                        href='https://www.linkedin.com/in/hadj-said-front-end-web-developer-a577a8255/'
                    />
                    {/* Developer 3 */}
                    <DeveloperAvatar
                        name='Ismail Benlaredj'
                        avatarUrl='/images/developer3.jfif'
                        description='Dynamic innovator, blends energy, tech trends for excellence.'
                        href='https://www.linkedin.com/in/ismailbenlaredj/'
                    />
                    {/* Developer 4 */}
                    <DeveloperAvatar
                        name='Mohamed Cheraitia'
                        avatarUrl='/images/mohamed-ch.jpg'
                        description='Versatile engineer, seamlessly blends creativity with technicality.'
                        href='https://www.linkedin.com/in/mohamed-ch-947939272/'
                    />
                    {/* Developer 5 */}
                    <DeveloperAvatar
                        name='Laid Benglia'
                        avatarUrl='/images/laid benglia.jpg'
                        description='Front-end magician, turns ideas into interactive wonders.'
                        href='https://www.linkedin.com/in/laid-benglia-452013199/'
                    />
                    {/* Developer 6 */}
                    <DeveloperAvatar
                        name='sara Bagache'
                        avatarUrl='/images/sara bagach.jpg'
                        description='Pragmatic developer, builds robust, scalable, user-friendly applications.'
                        href='https://github.com/SaraBegache'
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
