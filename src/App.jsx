import {ChakraProvider, Wrap, WrapItem, Avatar, Center, Heading } from '@chakra-ui/react'
import Avatars from './components/Avatars';
import CodeEx from './components/CodeEx';
import CollapseEx from './components/CollapseEx';
import DrawerEx from './components/DrawerEx';
import GridEx from './components/GridEx';
import Hero from './components/Hero';
import Media from './components/Media';

function App() {
  return (
    <ChakraProvider>
     <Avatars/>
      <CodeEx/>
      <CollapseEx/>
      <DrawerEx/>
      <GridEx/>
      <Hero/>
      <Media/>
    </ChakraProvider>
  );
}

export default App;
