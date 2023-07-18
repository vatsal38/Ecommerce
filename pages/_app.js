import MyState from '@/Context/myState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <MyState>
     <Component {...pageProps} />
  </MyState>
 )
}
