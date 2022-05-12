import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThinkness: 4,
                marginTop: 3,
                marginBotton: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff64c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c"
}

const config = {
    initiaColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme