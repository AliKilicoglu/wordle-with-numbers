import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen" data-theme="myDark">
      <RecoilRoot>
        <Toaster/>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
    )

}

export default MyApp
