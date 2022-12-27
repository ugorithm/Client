import '../styles/globals.css'
import { useState, useMemo } from "react"
import { refreshKeyContext } from "../UserContext";
 
export default function App({ Component, pageProps }) {

  const [refreshKey, setRefreshKey] = useState(null)

  const providerValue = useMemo(() => ({ refreshKey, setRefreshKey }), [refreshKey, setRefreshKey]);

  return (
  <>
    <refreshKeyContext.Provider value={providerValue}>
      <Component {...pageProps} />
    </refreshKeyContext.Provider>
  </>
  )
}
