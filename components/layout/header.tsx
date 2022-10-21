import React from 'react';
import Head from "next/head";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Head>
                <link href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            </Head>
            <div
                className=" p-10 h-100"
            >
                <nav className="navbar w-full bg-white">
                    <div className="container-lg px-0">
                        <div className="flex w-full items-center">
                            <Link href="/profile">
                                <a className="nav-brand mr-auto ml-0"> Reza Soufi </a>
                            </Link>
                            <button
                                navbar-trigger=""
                                className="navbar-trigger ml-auto mr-0 mb-0"
                                type="button"
                                aria-controls="navigation"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                    <span className="navbar-trigger-icon">
                    <span  className="navbar-trigger-bar mt-1"
                    ><span className="hidden origin-[10%_10%] rotate-45"></span
                    ></span>
                    <span  className="bar2 navbar-trigger-bar mt-2"></span>
                    <span className="bar3 navbar-trigger-bar mt-2"
                    ><span
                        className="mt-mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45"
                    ></span
                    ></span>
                    </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" navbar-menu="">
                            <ul className="navbar-nav">
                                <li>
                                    <Link href="/">
                                        <a className="nav-link" aria-current="page">
                                            <i className="material-icons mr-2 text-base opacity-60">home</i>
                                            <span>Home</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup">
                                        <a className="nav-link">
                                            <i className="material-icons mr-2 text-base opacity-60">apps</i>
                                            <span>sign up</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link href="/signin">
                                        <a className="nav-link">
                                            <i className="material-icons mr-2 text-base opacity-60">view_carousel</i>
                                            <span>sign in</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <style jsx>
                {`
                   @media only screen and (min-width: 1041px){
                     button{
                      display: none;
                     }
                   }
                `}
            </style>
        </>
    );
};

export default Header;