import '@/styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * Next.js App Component
 * Entry point for all pages
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
