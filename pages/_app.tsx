// refer: https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion-typescript/pages/_document.tsx

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@/styles/global-styles'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
