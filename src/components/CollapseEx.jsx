import React from 'react'
import { Button, Collapse, Box, useDisclosure, Center } from "@chakra-ui/react";



const CollapseEx = () => {

const {isOpen, onToggle} = useDisclosure()


  return (
    <div><Center mt={10}>
    <Button onClick={onToggle}>Abrir colapsable</Button>
    <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="facebook.50"
          rounded="md"
          shadow="md"
        >
          Además, podemos crear elementos colapsables animados gracias a Framer
          Motion
        </Box>
      </Collapse>
  </Center></div>
  )
}

export default CollapseEx