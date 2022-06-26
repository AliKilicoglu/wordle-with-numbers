import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen" data-theme="myDark">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
    )

}

export default MyApp
