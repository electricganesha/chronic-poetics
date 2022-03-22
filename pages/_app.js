import '../styles/globals.css'
import React from 'react'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </React.Fragment>
}

export default MyApp
