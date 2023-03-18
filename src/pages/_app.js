import Nav from '@/components/Nav'
import '@/styles/globals.css'
Nav
export default function App({ Component, pageProps }) {
  return <>
  <Nav/>
  <Component {...pageProps} />
  </>
}
