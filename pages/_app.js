import '../styles/globals.css'
import { useState, useMemo } from "react"
 
export default function App({ Component, pageProps }) {

  const [refreshKey, setRefreshKey] = useState(null)

  const providerValue = useMemo(() => ({ refreshKey, setRefreshKey }), [refreshKey, setRefreshKey]);

  return (
  <>
      <Component {...pageProps} />
  </>
  )
}
