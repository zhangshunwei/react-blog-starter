import React from 'react'
import Head from './head'
import Nav from './nav'
import Title from './title'
function Header ({ path, pageTitle }) {
    return (
        <>
            <Head title={pageTitle} />

            <header>
                <Title path={path} />
                <Nav />
            </header>
            <style jsx>
                {`
                header {
                    padding: 1em 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                `}
            </style>
        </>
    )
}

export default Header