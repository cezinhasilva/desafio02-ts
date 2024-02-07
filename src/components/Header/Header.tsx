import { 
  ChakraProvider,
  Box,
  Flex,
  Avatar,
  Text,
  Badge
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <ChakraProvider>
      <Flex>
        <Avatar src='https://www.psaojose.org.br/wp-content/uploads/2016/08/jesuscristo.jpg' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Cesar Silva
            <Badge ml='1' colorScheme='blue'>
              Dio Bank
            </Badge>
          </Text>
          <Text fontSize='sm'>Desenvolvedor</Text>
        </Box>
      </Flex>
    </ChakraProvider>    
  )
}
