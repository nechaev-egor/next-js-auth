import initAuth from '../controller/initAuth';
import '../styles/globals.sass'

initAuth();
function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
