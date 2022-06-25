import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen" data-theme="myDark">
      <Component {...pageProps} />
    </div>
    )

}

export default MyApp
