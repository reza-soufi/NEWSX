import React from 'react';
import Header from "./header";

// @ts-ignore
const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;