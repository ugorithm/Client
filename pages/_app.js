// import '../styles/globals.css'
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
