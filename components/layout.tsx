
import Navbar from './nav'
import Footer from './footer'
import { FC } from 'react';


export default function Layout( { children }: React.PropsWithChildren<{}> ) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}