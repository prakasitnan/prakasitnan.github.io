import { Box } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Prakasit Nanthakiri. All Rights Reserved.
        </Box>
    )
}