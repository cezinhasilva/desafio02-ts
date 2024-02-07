import { 
    Center,
    ChakraProvider,
    Button
  } from '@chakra-ui/react'

interface IBottom {
    event: () => void
}

export const Bottom = ({event}: IBottom) =>{
    return(
        <ChakraProvider>
            <Center>
                <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Login
                </Button>
            </Center>
        </ChakraProvider>
    )
}