import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Layout({ children, title }) {

    const variants = {
        hidden: { opacity: 0, x:0, y: 20 },
        enter : { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 }
    }

    const t = `${title} - Test`
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exite="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut '}}
            style={{ position: 'relative'}}
        >
            <>
            {title && (
                <Head>
                    <title>{t}</title>
                    <meta property="og:title" content={t} />
                </Head>
            )}
            {children}
            </>
        </motion.article>
    )
}