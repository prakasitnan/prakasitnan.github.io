import Logo from './logo'
import NextLink from 'next/link'
import { Box, Container, Flex, Heading, Stack, Link, Menu, MenuItem, MenuList, MenuButton, IconButton  } from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path === href

    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'gray.200' : undefined}
                color={active ? '#202023' : 'gray200'}
                target={target}
                {...props}
            >
            {children}
            </Link>
        </NextLink>
    )
}

export default function NavBar(props) {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base : 'column', md:'row'}}
                    display={{ base:'none', md:'flex' }}
                    width={{ base:'full', md:'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/blog" path={path}>
                        Blog
                    </LinkItem>
                    <LinkItem href="/code" path={path}>
                        Code
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inlne-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton 
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>
                                        About
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/blog" passHref>
                                    <MenuItem as={Link}>
                                        Blog
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/code" passHref>
                                    <MenuItem as={Link}>
                                        Code
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}