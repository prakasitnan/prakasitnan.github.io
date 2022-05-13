import Link from 'next/link'
import { Container, Box, Heading, chakra } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'



export default function Home() {

  return (
    <Layout title="main">
      <Container>
        <Box 
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg="whiteAlpha.500"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <h1>Hello, yeah!!!!</h1>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Prakasit Nanthakiri
            </Heading>
            <p>Full-stack Java Deverloper</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base:4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <img src="/images/cat.webp"  alt="Profile image" borderRadius="full" width="100%" height="100%"/>
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Tech-stack
        </Heading>
        <Paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Exp.
        </Heading>
        <BioSection>
          <BioYear>Jan 2018 - present</BioYear>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </BioSection>
      </Section>

      </Container>
    </Layout>
  )
}
