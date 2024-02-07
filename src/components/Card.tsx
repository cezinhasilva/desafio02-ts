import { 
  Center,
  ChakraProvider,
  Box,
  Input
} from '@chakra-ui/react'
import { Bottom } from './Bottom'
import { boasVindas } from '../services/boasVindas'

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <ChakraProvider>
      <Box minHeight='65vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Bottom event={boasVindas}></Bottom>
          </Center>
        </Box>
      </Box>
      <Box minHeight='20vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' marginTop='10px'>
            <h1>Card {id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
        </Box>
      </Box>
    </ChakraProvider>
  )
}