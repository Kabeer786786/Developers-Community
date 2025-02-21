import { FaBusinessTime, FaCalendar, FaCalendarCheck, FaHeart, FaMailBulk, FaMailchimp, FaTimes, FaWhatsapp } from "react-icons/fa"

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

export default function Support() {
    return (
        <div className="relative m-auto isolate bottom-0 overflow-hidden bg-gray-900 pt-16 sm:pb-20">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div className="max-w-[1600px] m-auto">
                <div className="flex flex-wrap md:text-left text-center order-first pb-4 md:px-10 lg:px-20">
                    <div className="lg:w-2/3 border border-gray-500 p-6 rounded-lg">
                        <h2 className="-mt-[54px] w-fit backdrop-blur p-2 pl-4 pr-4 rounded-2xl border-b border-gray-500 text-2xl font-semibold tracking-tight text-white sm:text-4xl">About Sprnt ...</h2>
                        <p className="mt-6 text-sm text-pretty text-gray-400 sm:text-base text-justify">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa repellendus perspiciatis eaque veritatis, beatae quam consequatur earum dolores possimus rem, quisquam explicabo culpa ex? Facere!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur laboriosam delectus aperiam dicta quos error quasi totam quam tempora maxime?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta magnam culpa id praesentium error in quas eius fugiat. Ut tempora dolore praesentium ducimus nulla.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia ducimus deleniti. Totam eum, sit ipsam exercitationem possimus sint. Nesciunt iste itaque odit eum quisquam!
                        </p>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full m-auto px-12">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg">FEEDBACK</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Share your thoughts!</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">We’d love to hear your thoughts!
                            <br className="lg:block hidden" />What did you enjoy, and what can we do better?
                        </p>
                        <p className="text-white flex flex-col gap-0.5 items-center justify-center mt-2 md:mt-6">
                            We Print With  <FaHeart color={"red"} /> in India
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap md:text-left text-center order-first pt-10 md:px-10 lg:px-32">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-wider md:text-xl mb-6">Sprnt.in</h2>
                        <nav className="list-none mb-10 list-disc text-lg text-gray-400">
                            <li>
                                <a className="text-gray-400 hover:text-white">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">How it works?</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Partner with Us!</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Help & Support</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Careers</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Contact</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-wider md:text-xl mb-6">Policies</h2>
                        <nav className="list-none mb-10 list-disc text-lg text-gray-400">
                            <li>
                                <a className="text-gray-400 hover:text-white">Terms & Conditions</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Shipping Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Cancellation Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Payment Terms</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-wider md:text-xl mb-6">Contact</h2>
                        <nav className="list-none mb-10 text-lg text-gray-400">
                            <li>
                                <a className="flex items-center gap-2 text-gray-400 hover:text-white"><FaWhatsapp size={"20px"} /> +91 9381492892</a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 text-gray-400 hover:text-white"><FaBusinessTime /> 10:00AM to 9:00PM</a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 text-gray-400 hover:text-white"><FaCalendarCheck /> MON to SAT</a>
                            </li>
                            <li>
                                <a className="flex items-center gap-2 text-gray-400 hover:text-white"><FaMailBulk /> support@sprnt.in</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <div className="title-font font-medium text-white tracking-wider md:text-xl mb-4">
                            <p className="pb-4">Shipping Partner</p>
                            <img src="dtdc.jpg" className="bg-white w-36 rounded" />
                        </div>
                        <div className="title-font font-medium text-white tracking-wider md:text-xl mb-4">
                            <p className="pb-4">Payment Partner</p>
                            <img src="razorpay.png" className="bg-white w-36 rounded mb-2" />
                            <img src="payment_option.png" />
                        </div>
                    </div>
                </div>
                <div className="justify-between max-w-[1440px] m-auto -mb-20">
                    <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-11 h-11 text-white p-2.5 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-2xl tracking-wide">Sprnt.in</span>
                        </a>
                        <p className="text-base text-gray-400 ml-auto mt-2">Copyrights © 2025 Sprnt Online Solutions
                            {/* — */}
                            {/* <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@sprntonline</a> */}
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a href="https://www.facebook.com/" className=" text-gray-400 border-gray-400 hover:text-white hover:bg-blue-600 rounded-full border-2 hover:border-blue-600 p-1.5">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.twitter.com/" className="ml-3 text-gray-400  border-gray-400 hover:text-white hover:bg-indigo-600 rounded-full border-2 hover:border-indigo-600 p-1.5">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/" className="ml-3 text-gray-400  border-gray-400 hover:text-white hover:bg-purple-600 rounded-full border-2 hover:border-purple-600 p-1.5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/" className="ml-3 text-gray-400 rounded-full border-2 border-gray-400 hover:text-white p-1.5 hover:bg-cyan-500 hover:border-cyan-400">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}