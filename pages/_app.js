import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
