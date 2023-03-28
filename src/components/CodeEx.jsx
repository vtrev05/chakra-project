import React from 'react'
import { Stack, Code } from "@chakra-ui/react";
const CodeEx = () => {
  return (
    <Stack direction="row" my={5} px={10}>
   <Code children="console.log('Incluso podemos insertar fragmentos de código')" />
    <Code colorScheme="red" children="var chakra = 'awesome!'" />
     <Code colorScheme="yellow" children="npm install chakra" /> 
  </Stack>
  )
}

export default CodeEx