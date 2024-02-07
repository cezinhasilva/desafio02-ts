import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card 
        id={1} 
        paragraph='Informativo Card' 
        details='Para mais informações efetue login'></Card>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
