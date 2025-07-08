import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Navbar } from './Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] px-4 py-6">
        <Outlet /> 
      </main>
      <Footer />
    </>
  )
}

export default Layout