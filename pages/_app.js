import '../styles/globals.css'
import { ThemeProvider } from '../components/themes/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}