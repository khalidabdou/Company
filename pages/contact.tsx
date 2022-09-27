import { sendContactForm } from "../services";
import React, { useState, useRef } from "react";
import { useRouter } from 'next/router'


export default function Contact() {
    const router = useRouter()
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");


    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {

        if (name == "" || email == "" || phone == "" || text == "") {

            setMessage("Something went wrong! Please try again ");
            setTimeout(() => {
                setMessage("")
            }, 2000);
            return
        }

        if (!validateEmail(email)) {
            setMessage("Something went wrong! Please check is email valid");
            setTimeout(() => {
                setMessage("")
            }, 2000);
            return
        }


        const res = await sendContactForm({
            name: name,
            email: email,
            phone: phone,
            company: company,
            message: text,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            setTimeout(() => {
                router.push("/")


            }, 3000);
        } else {
            setMessage("Something went wrong! Please try again");
            setTimeout(() => {
                setMessage("")
            }, 3000);
        }


    };


    function toast() {

        return <>
            <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div id="toast-simple" className="flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                    <svg aria-hidden="true" className="w-5 h-5 text-indigo-600 dark:text-indigo-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                    <div className="pl-4 text-sm font-normal">{message}</div>
                </div>
            </div></>

    }


    return (<>

        {toast}
        <div className="flex flex-wrap justify-center text-center m-24">
            <div className="w-full lg:w-6/12 px-4">
                <p className="mt-2 text-3xl font-bold leading-8 text-transparent tracking-tight bg-clip-text   bg-gradient-to-r from-indigo-400 to-indigo-600 sm:text-4xl">
                    Accelerate Your Business Growth!
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We have a team of the most experienced, certified, and dedicated web developers in who are always ready to go above and beyond to meet your needs.
                </p>
            </div>
        </div>
        <form className="m-9">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        onChange={(e) => { e.preventDefault; setName(e.target.value) }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="John"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Email Adress
                    </label>
                    <input
                        type="email"

                        onChange={(e) => { e.preventDefault; setEmail(e.target.value) }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="john.doe@company.com"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Company
                    </label>
                    <input

                        type="text"
                        id="company"
                        onChange={(e) => { e.preventDefault; setCompany(e.target.value) }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="Company "
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Phone number
                    </label>
                    <input
                        onChange={(e) => { e.preventDefault; setPhone(e.target.value) }}
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="123-45-678"

                    />
                </div>


            </div>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    About Your Project
                </label>
                <textarea
                    id="message"
                    onChange={(e) => { e.preventDefault; setText(e.target.value) }}
                    rows={5}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Your message..."></textarea>

            </div>


            <button
                type="button"
                onClick={(e) => submitContact(e)}
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
                Send
            </button>

        </form>
        {message ?
            <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div id="toast-simple" className="flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                    {message.includes("Thank") ?
                        <svg aria-hidden="true" className="w-5 h-5 text-indigo-600 dark:text-indigo-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                        :
                        <svg aria-hidden="true" className="w-5 h-5 text-indigo-600 dark:text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    }
                    <div className="pl-4 text-sm font-normal">{message}</div>
                </div>
            </div>
            : ""
        }
    </>




    )
}