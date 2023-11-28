import Header from './header'
import Footer from './footer'

import React,{ useState } from 'react'
 
export default function Layout({ children }) {

  const dataAtual = new Date();
  const [Year] = useState(dataAtual.getFullYear())

  return (
    <div id={'layout'}>
      <Header />
        <main>{children}</main>
      <Footer Year={Year}/>
    </div>
  )
}