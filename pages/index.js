import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container
      borderColor={useColorModeValue('teal', '#F1C40F')}
      borderWidth={2}
      borderStyle="solid"
      borderRadius="20"
      //bgImage="images/wallpaper.jpg"
      bgColor={useColorModeValue('white', '#0F0F0F')}
    >
      <Box
        display={{ md: 'flex' }}
        //bgImage="images/wallpaper.jpg"
        borderColor={useColorModeValue('teal', '#F1C40F')}
        borderWidth={0}
        borderStyle="solid"
        borderRadius="20"
        mb={6}
        p={3}
        //textAlign="center"
        bg={useColorModeValue('whiteAplha.500', 'whiteAlpha.200')}
      >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arturo Aragón
          </Heading>
          <p>📚 Computer Engineering UPC | 20 </p>
          <p>🏡 Calella, BCN</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="black"
            borderWidth={0}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/arturo.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          Arturo Aragón Hidalgo is a Computer Engineering student based in
          Calella, Barcelona with a passion for building digital services/stuff
          he wants. He has a knack for all things launching products, from
          planning and designing all the way to solving real-life problems with
          code. Currently, one of his projects is:{' '}
          <NextLink href="https://twitter.com/ThatSpotifyLink">
            <Link>ThatSpotifyLink</Link>
          </NextLink>{' '}
          a Twitter tool using{' '}
          <NextLink href="https://www.tweepy.org/">
            <Link>Tweepy</Link>
          </NextLink>{' '}
          +{' '}
          <NextLink href="https://developer.spotify.com/documentation/web-api/">
            <Link>Spotify API</Link>
          </NextLink>{' '}
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://open.spotify.com/playlist/6Y7CGtyvuMWlXsh3LegIyA">
            <Button
              rightIcon={<ChevronRightIcon />}
              color="#191414"
              bgColor="#1DB954"
              //fontStyle="circular"
            >
              Visit @ThatSpotifyLink Global Playlist
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Chancayllo, Lima, Perú.
        </BioSection>
        <BioSection>
          <BioYear>2002</BioYear>
          Moved from Perú to Barcelona, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2012 - 2018</BioYear>
          Studied at IES Bisbe Sivilla (Calella).
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2019</BioYear>
          Studied a Double-Degree in Computer Engineering & Videogame
          Development at TecnoCampus Mataro (UPF).
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Continued Computer Engineering degree at Univerisitat Politècnica de
          Catalunya (UPC).
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/artuaragon_" target="_blank">
              <Button
                variant="ghost"
                // colorScheme="teal"
                color={useColorModeValue('teal', '#F1C40F')}
                leftIcon={<Icon as={IoLogoTwitter} color="#1DA1F2" />}
              >
                @artuaragon_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/artuaragon_" target="_blank">
              <Button
                variant="ghost"
                //colorScheme="teal"
                color={useColorModeValue('teal', '#F1C40F')}
                leftIcon={<Icon as={IoLogoInstagram} color="#E1306C" />}
              >
                @artuaragon_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/artHub-j" target="_blank">
              <Button
                variant="ghost"
                //colorScheme="teal"
                color={useColorModeValue('teal', '#F1C40F')}
                leftIcon={
                  <Icon
                    as={IoLogoGithub}
                    color={useColorModeValue('black', 'black')}
                  />
                }
              >
                @artHub-j
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
