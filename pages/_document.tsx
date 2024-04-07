import { Html, Head, Main, NextScript } from 'next/document'
// import { Header } from '../src/components/header'
// import { Footer } from '@/src/components/footer'
// import { SideBar } from '@/src/components/sidebar'


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* <!-- Place favicon.ico in the root directory --> */}
                <link rel="shortcut icon" type="image/x-icon" href="/assets/vrfavicon.ico" />
                {/* <!-- CSS here --> */}
                {/* <link rel="stylesheet" href="/assets/css/bootstrap.min.css" /> */}
            </Head>

            <body>
                {/* <Header /> */}
                {/* <SideBar /> */}
                <Main />
                <NextScript />
                {/* <Footer /> */}

                {/* <--- JS here ---> */}
                {/* <script src="/assets/js/main.js" defer></script> */}
            </body>
        </Html>
    )
}
