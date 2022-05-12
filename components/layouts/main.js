import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import Footer from '../footer'

export default function Main({ children, router }) {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewpoint" content="width=device-width, initial-scale=1" />
                <title>Prakasit Nanthakiri - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>

                {children}

            </Container>
            <Footer />
        </Box>
    )
}