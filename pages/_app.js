// import '../styles/globals.css'
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import "../styles/globals.css"
import { NextUIProvider, createTheme } from '@nextui-org/react';

const NextUItheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={NextUItheme}>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Component {...pageProps} />
      </MantineProvider>
      </NextUIProvider>
    </>
  )
}
