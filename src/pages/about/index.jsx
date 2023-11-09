import Image from "next/image";
import Link from "next/link";
import DeveloperAvatar from "@/components/developeravatar/DeveloperAvatar";

function AboutPage() {
    return (
        <section className='container mx-auto'>
            <div className='lg:grid grid-cols-10 lg:flex-row flex-col'>
                <div className='lg:my-28 lg:col-span-5'>
                    <p className='m-20 text-xl'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ullam, quia ad alias non saepe aliquid, totam,
                        aliqu perspiciatis optio doloribus debitis vero
                        voluptates esse. Voluptatum nihil nam fuga minima! quis
                        nostr exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
                <div className='lg:col-span-5 lg:order-first'>
                    <Image
                        className='lg:m-0 lg:w-11/12 w-3/4 mx-0'
                        src='/images/about.jpg'
                        width={300}
                        height={300}
                        alt='hero image'
                    />
                </div>
            </div>
            <div className='flex flex-wrap justify-center mt-20 mb-20'>
                <div className='text-center w-full mb-4'>
                    <h1 className='text-2xl font-bold'>Our Team</h1>
                </div>
                {/* Developer 1 */}
                <DeveloperAvatar
                    name='Developer 1'
                    avatarUrl='/images/developer1.jfif'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    href='https://www.linkedin.com/in/darine-tag/'
                />
                {/* Developer 2 */}
                <DeveloperAvatar
                    name='Hadj Said Bouras'
                    avatarUrl='/images/developer2.jfif'
                    description='Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    href='https://www.linkedin.com/in/hadj-said-front-end-web-developer-a577a8255/'
                />
                {/* Developer 3 */}
                <DeveloperAvatar
                    name='Developer 3'
                    avatarUrl='/images/developer3.jfif'
                    description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
                    href='/developer3'
                />
                {/* Developer 4 */}
                <DeveloperAvatar
                    name='Developer 4'
                    avatarUrl='/images/developer4.jpg'
                    description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    href='/developer4'
                />
                {/* Developer 5 */}
                <DeveloperAvatar
                    name='Developer 5'
                    avatarUrl='/images/developer5.jpg'
                    description='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    href='/developer5'
                />
                {/* Developer 6 */}
                <DeveloperAvatar
                    name='Developer 6'
                    avatarUrl='/images/developer6.jpg'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    href='/developer6'
                />
            </div>
        </section>
    );
}

export default AboutPage;
