import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )     

}
