"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();
        postData();
    };

    const postData = async () => {
        let res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ email, message }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let data = await res.json();
        if (data.ok) {
            toast("Send successful!!");
            router.push("/");
        } else {
            toast.error("Failed to send message.");
        }
    };

    return (
        <>
            <style jsx>{`
                @media (max-width: 640px) {
                    .Toastify__toast-container {
                        top: 50% !important;
                        left: 50% !important;
                        transform: translate(-50%, -50%) !important;
                    }
                }
            `}</style>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full md:mt-0 relative z-10 shadow-md">
                <form onSubmit={submitHandler}>
                    <h2 className="text-gray-900 text-lg mb-1 font-serif title-font">
                        Connect With Us
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600"></p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            value={message}
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        We will contact you as soon as possible.
                    </p>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
