
import Navbar from './nav'
import Footer from './footer'

export default function Layout( children: any ) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}