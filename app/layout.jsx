import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

export const metadata = {
  title: 'Gal Povsod',
  description: 'Gal Povsod - Frontend Developer, Designer and Creative Director',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
