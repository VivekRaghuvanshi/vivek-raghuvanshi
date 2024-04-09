
import Head from 'next/head';

function VivekPortfolio({ Component, pageProps }: any) {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="title" content="Vivek Raghuvanshi" />
                <meta name="description" content="Building cool stuff with code! Let's connect and create something awesome together." />

                <meta name="keywords" content="Software Engineer , Software Developer , Software Development , SDE ,Generative AI, LLM, IT Services, Software Solutions, Technology Innovation, Business Efficiency, Digital Transformation, Cloud Computing, Cybersecurity, Data Analytics, Artificial Intelligence, Custom Software Development, Managed IT Services, IT Consulting, Scalable Solutions, Enterprise Software, Mobile App Development, Web Development, Automation, Network Infrastructure, Software Integration, Support and Maintenance, Cloud Services." />
                <link rel="canonical" href="https://vivek-raghuvanshi.vercel.app/" />
                <meta property="og:locale" content="en_us" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Vivek Raghuvanshi" />
                <meta property="og:description" content="Building cool stuff with code! Let's connect and create something awesome together." />
                <meta property="og:url" content="https://vivek-raghuvanshi.vercel.app/" />
                <meta property="og:image" content="https://vivek-raghuvanshi.vercel.app/assets/metavivek.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="900" />
                <meta property="og:site_name" content="Vivek Raghuvanshi" />
                <meta property="og:image:alt" content="VR" />
                <meta name="twitter:image" content="https://vivek-raghuvanshi.vercel.app/assets/metavivek.png" />
                <meta name="twitter:description" content="Building cool stuff with code! Let's connect and create something awesome together." />
                <meta name="twitter:url" content="https://vivek-raghuvanshi.vercel.app/" />
                <meta name="twitter:title" content="Vivek Raghuvanshi" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@tweetxvivek" />
                <meta name="twitter:creator" content="@tweetxvivek" />
                <meta name="twitter:image:alt" content="VR" />

                <title>Vivek | Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default VivekPortfolio;
