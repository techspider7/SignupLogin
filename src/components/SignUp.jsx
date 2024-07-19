import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {

    useGSAP(() => {
        gsap.to("#logo", {
            opacity: 1,
            y: 20,
            repeat: -1,
            yoyo: true,
            ease: "back.inOut",
            duration: 1,
        })
    }, [])

    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);

    return (

        <section className="bg-slate-900 min-h-screen" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="/assets/spiderman.jpg"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <Link className="block text-white" to="https://www.instagram.com/techspider7/">
                            <img id="logo" className="h-20 opacity-30 sm:h-20 w-20" src="https://loodibee.com/wp-content/uploads/Spider-Man-Emblem.png" alt="" />
                        </Link>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            TECH SPIDER
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Follow TECH SPIDER <Link to="https://www.instagram.com/techspider7/" className='text-blue-300'>(@techspider7)</Link> for more tech content.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <Link
                                className="inline-flex items-center justify-center"
                                to="https://www.instagram.com/techspider7/"
                            >
                                <img id="logo" className="h-20 sm:h-20 w-20" src="https://loodibee.com/wp-content/uploads/Spider-Man-Emblem.png" alt="" />
                            </Link>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                TECH SPIDER
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Follow TECH SPIDER <Link to="https://www.instagram.com/techspider7/" className='text-blue-300'>(@techspider7)</Link> for more tech content.
                            </p>
                        </div>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-300">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    className="w-full py-1 px-2 mt-2 rounded-lg outline-none bg-slate-300"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-300">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="last_name"
                                    className="w-full py-1 px-2 mt-2 rounded-lg outline-none bg-slate-300"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-300"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="w-full py-1 px-2 mt-2 rounded-lg outline-none bg-slate-300"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-300"> Password </label>

                                <div className="flex items-center justify-end">
                                    <input
                                        type={`${showPassword ? "text" : "password"}`}
                                        id="Password"
                                        name="password"
                                        className="w-full py-1 px-2 mt-2 rounded-lg outline-none bg-slate-300"
                                    />
                                    <span className="absolute mt-2 mr-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{!showPassword ? <FaRegEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-300">
                                    Password Confirmation
                                </label>

                                <div className='flex items-center justify-end'>
                                    <input
                                        type={`${confirmShowPassword ? "text" : "password"}`}
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        className="w-full py-1 px-2 mt-2 rounded-lg outline-none bg-slate-300"
                                    />
                                    <span className="absolute mt-2 mr-2 cursor-pointer" onClick={() => setConfirmShowPassword(!confirmShowPassword)}>{!confirmShowPassword ? <FaRegEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md cursor-pointer border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-300">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-100">
                                    By creating an account, you agree to our {" "}
                                    <a href="#" className="text-blue-500 underline"> terms and conditions{" "} </a> {" "}
                                    and {" "}
                                    <a href="#" className="text-blue-500 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-100 sm:mt-0 flex justify-center items-center gap-2">
                                    Already have an account?
                                    {" "}<Link to="/login" className="text-blue-500 underline">Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default SignUp
