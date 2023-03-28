import React from 'react'
import {ChakraProvider, Wrap, WrapItem, Avatar, Center, Heading } from '@chakra-ui/react'

const Avatars = () => {
  return (
    <Center mt={10}>
    <Heading size="md" mb={4} px={10} pt={3}>
      También podemos generar avatares
    </Heading>
    <Wrap>
      <WrapItem>
        <Avatar
          name="Iron Man"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv7bL0uY1-zX_zbADPYgrxaEL7tkJkraWcw&usqp=CAU"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          name="Spiderman"
          src="https://sm.ign.com/t/ign_es/screenshot/default/spiderman_16eh.h720.jpg"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          name="Ant-Man"
          src="https://i.pinimg.com/originals/22/d1/54/22d1547bef12349c1d31801168a99da3.jpg"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          name="Thor"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2rK3xJY9AG8Q_Ij-pycib7BEup16jiYC10RHA5bElQldHewVtfT22gl1PajJC7idEUc&usqp=CAU"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          name="Thanos"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOU27FCLa9QaA5Zk08zcIozoYxlICCysn1Q&usqp=CAU"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          name="Black Panther"
          src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjgzNTEwMTg3NzQz/mcdblpa_ec092-1-2.jpg"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          name="Loki"
          src="https://infoliteraria.com/wp-content/uploads/2020/12/Loki-1280x720.jpg"
        />
      </WrapItem>
    </Wrap>
    </Center>
  )
}

export default Avatars


