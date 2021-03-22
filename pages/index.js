import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <React.Fragment>
      	<Head>
        	<title>Create Next App | Home</title>
    	</Head>
		<Header></Header>
		<main className="home-page">
			<div className="container">
				<div className="row">
					<div className="col-12">
						
					</div>
				</div>
			</div>
		</main>
		<Footer></Footer>
    </React.Fragment>
  )
}
