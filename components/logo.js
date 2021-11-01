import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  //const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 192.756 192.756"
          >
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
              <path d="M17.271 17.414h158.213v157.928H17.271V17.414z" />
              <path
                fill="#f6d33c"
                d="M20.991 20.848h150.775V171.91H20.991V20.848z"
              />
              <path d="M78.497 76.637v27.751H65.335l13.162-27.751zm-41.771 57.22L72.489 55.18h20.885v78.677H78.497v-14.592H59.042l-7.153 14.592H36.726z" />
              <path d="M134.859 76.637v27.751h-12.875l12.875-27.751zm-41.485 57.22l35.478-78.677h20.885v78.677H134.86v-14.592h-19.455l-7.152 14.592H93.374z" />
            </g>
          </svg>

          {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
          <Text
            color={useColorModeValue('black', 'white')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            ragon
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
