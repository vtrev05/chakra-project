//Media.jsx
import { Heading, Center, Image } from "@chakra-ui/react";

const Media = () => {
  return (
    <>
      <Center>
        <Heading size="md" px={15} mt={10}>
          Podemos insertar elementos media y definir su Aspect Ratio
        </Heading>
      </Center>
      <Center p={15} mx={"30%"}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
        />
      </Center>
    </>
  );
};

export default Media;