import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Stack,
  Box,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  Select,
  DrawerFooter,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

const DrawerEx = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <div>
      <Center>
        <Button colorScheme="red" onClick={onOpen} mb={10}>
          Y tener formularios desplegables con el componente Drawer
        </Button>
      </Center>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
       <DrawerOverlay />
       <DrawerContent>
       <DrawerCloseButton />
       <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>
        <DrawerBody>
            <Stack spacing="24px">
            <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type="url"
                    id="url"
                    placeholder="Please enter domain"
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>


              <Box>
                <FormLabel htmlFor="hero">Select Superhero</FormLabel>
                <Select id="hero" defaultValue="tony">
                  <option value="tony">Iron-Man</option>
                  <option value="spidey">Spider-Man</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
          </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerEx;
