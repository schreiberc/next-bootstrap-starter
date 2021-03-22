import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {	
  return (
  <React.Fragment>
	  <Head>
		  <meta name="description" content=""/>
		  <link rel="icon" href="/favicon.ico" />

	  </Head>
	  <script
            dangerouslySetInnerHTML={{
              __html: `
			  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			  })(window,document,'script','dataLayer','GTM-XXXXXX');
			  `
            }}
        />
		<noscript
            dangerouslySetInnerHTML={{
              __html: `
			  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
			  height="0" width="0" style="display:none;visibility:hidden"></iframe>
			  `
            }}
      	/>
		
  		<Component {...pageProps} />

	</React.Fragment>
  )
}


export default MyApp
