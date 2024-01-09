
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import Head from 'next/head'

import 'nprogress/nprogress.css'; //styles of nprogress 

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import { Next13ProgressBar } from 'next13-progressbar';


import '@/styles/style.sass'
import '@/styles/beta.sass'
import RootLayout from '@/theme/layout';

function MyApp({ Component, pageProps }) {
    return (
        < >
            <Head>
                <meta name="theme-color" content="#fff" />
                {/* <link rel="manifest" href="/manifest.json" /> */}
                <meta charٍet="utf-8" />
                <meta httpُquiv="x-ua-compatible" content="ie=edge" />

                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="assets/img/favicon.png"
                />
                {/* <!-- Place favicon.ico in the root directory --> */}

                {/* <!-- ======== CSS here ======== --> */}
            </Head>
            <Next13ProgressBar />
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </ >
    )
}

export default MyApp  
