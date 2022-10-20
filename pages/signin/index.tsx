import React from 'react';
import Head from "next/head";
import Link from "next/link";

const Signin = () => {
    return (
            <div className="container mx-auto flex flex-col items-center">
                <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                    <input type="text" placeholder="Email or Phone Number"
                           className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"/>
                    <input type="text" placeholder="Pasword"
                           className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"/>
                    <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                    <hr/>
                    <Link href="/signup">
                        <a>
                            <button
                                className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create
                                New Account
                            </button>
                        </a>
                    </Link>
                </form>
            </div>
    );
};

export default Signin;