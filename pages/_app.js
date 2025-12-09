import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        {/* key uses pathname so AnimatePresence triggers on route change */}
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp

