import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'



export default function LogoBox() {

    const LogoBox = styled.span`
        font-weight: bold;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        heightL 30px;
        line-height:20px;
        padding: 10px;

        img {
            transition: 200ms ease;
        }

        &:hover img {
            transform: rotate(20deg);
        }
    `

    const footPrintImg = `/images/cat-footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link  href="/" scroll={false}>
            <a>
                <LogoBox>
                    <img src={footPrintImg} width={20} height={20} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        Prakasit Nanthakiri
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}