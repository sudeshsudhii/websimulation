import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title> WEB SIMULATION</title>
            <meta charSet="utf-8" />
            <meta name="title" content="SUDHII -  Software Engineer" />
            <meta name="description"
                content="Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="SUDHII)" />
            <meta name="keywords"
                content="sudhii, portfolio, linux, ubuntu portfolio,  protfolio,computer, ubuntu, ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content=" Portfolio - Senior Software Engineer" />
            <meta itemProp="description"
                content="Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Portfolio - Senior Software Engineer" />
            <meta name="twitter:description"
                content="Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="sudhii" />
            <meta name="twitter:creator" content="sudhii" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Portfolio - Senior Software Engineer" />
            <meta name="og:description"
                content="(sudhii) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://sudeshsudhii.github.io/" />
            <meta name="og:site_name" content="Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
