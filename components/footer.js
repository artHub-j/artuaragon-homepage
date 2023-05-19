import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.5} fontSize="sm" color="white">
      &copy; {new Date().getFullYear()} Arturo Aragón - Homepage
    </Box>
  )
}

export default Footer
